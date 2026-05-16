"use client";

import { useState } from "react";

/** Full-screen password gate shown until the visitor authenticates. */
export default function PasswordGate() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    if (!password || loading) return;
    setLoading(true);
    setError(false);
    try {
      const res = await fetch("/api/gate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });
      if (res.ok) {
        window.location.reload();
        return;
      }
    } catch {
      // network failure falls through to the error state
    }
    setError(true);
    setLoading(false);
    setPassword("");
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-backdrop px-6 text-fg">
      <form onSubmit={submit} className="w-full max-w-[320px]">
        <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-accent">
          Portfolio
        </p>
        <h1 className="mt-2.5 text-[30px] font-extrabold tracking-[-0.03em]">
          서지완
        </h1>
        <p className="mt-2.5 text-[11.5px] leading-[1.75] text-muted">
          비공개 포트폴리오입니다. 전달받은 비밀번호를 입력하면 들어갈 수
          있습니다.
        </p>

        <input
          type="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
            setError(false);
          }}
          autoFocus
          placeholder="비밀번호"
          aria-label="비밀번호"
          className="mt-6 w-full border-b border-line-2 bg-transparent pb-2 text-[14px] tracking-wide outline-none transition-colors placeholder:text-dim focus:border-accent"
        />
        {error && (
          <p className="mt-2.5 text-[11px] font-medium text-[#d23b3b]">
            비밀번호가 올바르지 않습니다.
          </p>
        )}

        <button
          type="submit"
          disabled={!password || loading}
          className="mt-6 w-full rounded-lg bg-accent py-2.5 text-[12.5px] font-bold text-white transition-opacity disabled:opacity-35"
        >
          {loading ? "확인 중…" : "들어가기"}
        </button>
      </form>
    </main>
  );
}
