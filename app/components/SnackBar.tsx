"use client";

import { createPortal } from "react-dom";

export default function SnackBar({ text }: { text: string }) {
  if (typeof window === "undefined") return null; // مهم لمنع مشاكل SSR

  return createPortal(
    <div className="fixed top-5 right-5 bg-white shadow-lg rounded-lg px-4 py-3 z-[9999] flex items-center gap-3">
      <span className="icon-smile text-emerald-600 text-2xl"></span>
      <p className="text-gray-900 font-semibold">{text}</p>
    </div>,
    document.body
  );
}
