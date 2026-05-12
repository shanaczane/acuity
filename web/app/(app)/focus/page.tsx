"use client"

import { useState, useEffect, useCallback } from "react"
import { useRouter } from "next/navigation"
import { LogOut } from "lucide-react"
import FocusInitial from "@/components/focus/FocusInitial"
import FocusProlonged from "@/components/focus/FocusProlonged"

export default function FocusPage() {
  const router = useRouter()
  const [elapsed, setElapsed] = useState(0)
  const [prolonged, setProlonged] = useState(false)

  useEffect(() => {
    const id = setInterval(() => {
      setElapsed((s) => {
        const next = s + 1
        if (next >= 120 && !prolonged) setProlonged(true)
        return next
      })
    }, 1000)
    return () => clearInterval(id)
  }, [prolonged])

  const exit = useCallback(() => router.push("/dashboard"), [router])

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") exit()
    }
    window.addEventListener("keydown", handler)
    return () => window.removeEventListener("keydown", handler)
  }, [exit])

  return (
    <div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center"
      style={{ background: "#f5f5f0", fontFamily: "Inter, -apple-system, sans-serif" }}
    >
      {/* Exit button */}
      <button
        onClick={exit}
        className="absolute top-5 right-5 flex items-center gap-1.5 border border-gray-300 rounded-lg px-3 py-1.5 text-xs text-gray-500 hover:bg-white transition-colors"
      >
        <LogOut size={12} />
        Exit focus
        <kbd className="ml-1 text-[10px] text-gray-400">esc</kbd>
      </button>

      {prolonged ? (
        <FocusProlonged elapsed={elapsed} />
      ) : (
        <FocusInitial elapsed={elapsed} />
      )}
    </div>
  )
}
