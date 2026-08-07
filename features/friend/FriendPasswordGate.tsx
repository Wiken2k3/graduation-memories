"use client";

import { useState, useTransition, type FormEvent } from "react";
import { useRouter } from "next/navigation";

interface Props {
  slug: string;
  friendName: string;
}

export default function FriendPasswordGate({ slug, friendName }: Props) {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isPending, startTransition] = useTransition();
  const [submitting, setSubmitting] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (submitting || isPending) {
      return;
    }

    setError("");
    setSubmitting(true);

    try {
      const response = await fetch(`/api/friend/${slug}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ password }),
      });

      if (response.ok) {
        startTransition(() => {
          router.refresh();
        });
        return;
      }

      const data = await response.json().catch(() => null);
      setError(data?.message ?? "Hình như mật khẩu chưa đúng rồi.");
    } catch (error) {
      setError("Có lỗi xảy ra, thử lại nhé.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <section className="bg-[#F5F1E6] py-10 sm:py-12">
      <div className="mx-auto w-full max-w-xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-[32px] border border-[#E9E2D4]/80 bg-white shadow-[0_28px_80px_rgba(18,18,20,0.08)]">
          <div className="border-b border-[#E9E2D4]/70 px-6 py-6 sm:px-8 sm:py-7">
            <p className="inline-flex items-center rounded-full border border-[#E5EEFF] bg-[#F2F8FF] px-3 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-[#4B7BBE]">
              Graduation 2026
            </p>
          </div>

          <div className="px-6 py-8 sm:px-8 sm:py-10">
            <h1 className="text-3xl font-semibold tracking-tight text-[#252525] sm:text-4xl">
              Một món quà nhỏ dành riêng cho cậu.
            </h1>
            <p className="mt-4 text-base leading-7 text-[#4E5157] sm:text-lg">
              Nhập mật khẩu để mở kỷ niệm của <span className="font-semibold text-[#272727]">{friendName}</span>.
            </p>
            <p className="mt-3 text-sm text-[#6E737B]">
              Mã này chỉ dành riêng cho cậu nên nhớ giữ kín nhé.
            </p>

            <form onSubmit={handleSubmit} className="mt-9 space-y-5">
              <label className="block text-sm font-medium text-[#4E5157]">
                Mật khẩu của cậu
                <input
                  type="password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  autoFocus
                  placeholder="Nhập mật khẩu"
                  autoComplete="current-password"
                  className="mt-3 h-14 w-full rounded-[20px] border border-[#D8D2C4] bg-[#FAFAF8] px-5 text-base text-[#272727] outline-none transition focus:border-[#7298C7] focus:ring-2 focus:ring-[#7298C7]/20"
                />
              </label>

              {error ? (
                <p className="rounded-[20px] border border-[#F3D0D0] bg-[#FFF1F1] px-4 py-3 text-sm text-[#9C2A2A]">
                  {error}
                </p>
              ) : null}

              <div className="grid gap-3 sm:grid-cols-[1fr_auto] sm:items-center">
                <button
                  type="submit"
                  disabled={submitting || isPending || password.trim().length === 0}
                  className="w-full rounded-full bg-[#4C82BF] px-6 py-4 text-sm font-semibold text-white transition hover:bg-[#3f6ba4] disabled:cursor-not-allowed disabled:bg-[#9fb2c5] sm:w-auto"
                >
                  {submitting || isPending ? "Đang mở kỷ niệm..." : "Mở kỷ niệm"}
                </button>

                <button
                  type="button"
                  onClick={() => router.push("/#memory-wall")}
                  className="w-full rounded-full border border-[#E9E6DF] bg-white px-6 py-4 text-sm font-medium text-[#52545A] transition hover:border-[#7298C7] hover:text-[#7298C7] sm:w-auto"
                >
                  ← Quay lại
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
