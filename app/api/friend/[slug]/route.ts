import { NextResponse } from "next/server";
import { createAuthCookieResponse, isFriendPasswordValid, isFriendSlugValid } from "@/lib/friendAuth";

interface Params {
  slug: string;
}

export async function POST(
  request: Request,
  { params }: { params: Promise<Params> },
) {
  const { slug } = await params;

  if (!isFriendSlugValid(slug)) {
    return NextResponse.json(
      { success: false, message: "Không tìm thấy kỷ niệm này." },
      { status: 404 },
    );
  }

  const body = await request.json().catch(() => null);
  const password = body?.password;

  if (typeof password !== "string") {
    return NextResponse.json(
      { success: false, message: "Mật khẩu chưa đúng, thử lại nhé." },
      { status: 400 },
    );
  }

  if (!isFriendPasswordValid(slug, password)) {
    return NextResponse.json(
      { success: false, message: "Mật khẩu chưa đúng, thử lại nhé." },
      { status: 401 },
    );
  }

  return createAuthCookieResponse(slug);
}
