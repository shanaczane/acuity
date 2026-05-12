"use client"

import { useEffect, useState } from "react"

function formatTime(seconds: number) {
  const m = Math.floor(seconds / 60).toString().padStart(2, "0")
  const s = (seconds % 60).toString().padStart(2, "0")
  return `${m}:${s}`
}

const engagementLabels = [
  "engagement holding",
  "focus detected",
  "deep work mode",
  "on track",
]

export default function FocusInitial({ elapsed }: { elapsed: number }) {
  const label = engagementLabels[Math.floor(elapsed / 30) % engagementLabels.length]

  return (
    <div className="flex flex-col items-center text-center">
      <div className="flex items-center gap-2 mb-10">
        <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
        <span className="text-[11px] uppercase tracking-[0.15em] text-blue-600 font-semibold">
          Focus Session · In Progress
        </span>
      </div>

      <p className="text-sm italic text-gray-400 mb-3">You can start with:</p>

      <h1 className="text-[40px] font-bold text-gray-900 leading-tight mb-4 max-w-lg">
        Finish CS150 problem set 4
      </h1>

      <p className="text-sm text-gray-400">
        {formatTime(elapsed)} &nbsp;·&nbsp; {label}
      </p>
    </div>
  )
}
