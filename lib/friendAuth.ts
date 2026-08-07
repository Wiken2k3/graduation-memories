import crypto from "crypto";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import { friendPasswords } from "@/lib/friendPasswords";
import { friends } from "@/data/friends";

const AUTH_COOKIE_NAME = "authenticatedFriendSlug";
const COOKIE_MAX_AGE = 60 * 60 * 24 * 7; // 7 days
const COOKIE_SECRET = process.env.FRIEND_AUTH_COOKIE_SECRET ?? "friend-auth-cookie-dev-secret";

function signSlug(slug: string) {
  return crypto.createHmac("sha256", COOKIE_SECRET).update(slug).digest("hex");
}

function createCookieValue(slug: string) {
  return `${slug}.${signSlug(slug)}`;
}

function verifyCookieValue(value: string): string | null {
  if (!value || typeof value !== "string") {
    return null;
  }

  const [slug, signature] = value.split(".");

  if (!slug || !signature) {
    return null;
  }

  if (!isFriendSlugValid(slug)) {
    return null;
  }

  if (signSlug(slug) !== signature) {
    return null;
  }

  return slug;
}

export async function getAuthenticatedFriendSlug() {
  const cookieStore = await cookies();
  const rawValue = cookieStore.get(AUTH_COOKIE_NAME)?.value;
  return verifyCookieValue(rawValue ?? "");
}

export function isFriendSlugValid(slug: string) {
  return friends.some((friend) => friend.slug === slug);
}

export function isFriendPasswordValid(slug: string, password: string) {
  const stored = friendPasswords[slug as keyof typeof friendPasswords];

  if (!stored || stored.length === 0) {
    return false;
  }

  return password === stored;
}

export function createAuthCookieResponse(slug: string) {
  const response = NextResponse.json({ success: true });

  response.cookies.set({
    name: AUTH_COOKIE_NAME,
    value: createCookieValue(slug),
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/friend",
    maxAge: COOKIE_MAX_AGE,
  });

  return response;
}
