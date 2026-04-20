"use client";

import { useState } from "react";
import { Button } from "./ui/button";

export function EmailCaptureForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "submitted">("idle");

  return (
    <div>
      <label className="text-sm font-medium text-slate-200" htmlFor="email">
        Email address
      </label>
      <div className="mt-3 flex flex-col gap-3 sm:flex-row">
        <input
          id="email"
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="you@example.com"
          className="min-w-0 flex-1 rounded-full border border-slate-700 bg-slate-950/90 px-5 py-3 text-sm text-slate-100 outline-none transition focus:border-purple-400 focus:ring-2 focus:ring-purple-500/20"
        />
        <Button
          variant="primary"
          onClick={() => {
            if (email.trim().length > 4) {
              setStatus("submitted");
            }
          }}
          className="w-full sm:w-auto"
        >
          Join waitlist
        </Button>
      </div>
      {status === "submitted" && (
        <p className="mt-4 text-sm text-emerald-300">
          Thanks! We will notify you when ScriptForge AI launches.
        </p>
      )}
    </div>
  );
}
