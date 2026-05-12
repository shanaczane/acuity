"use client"

import { useState } from "react"
import { signIn } from "next-auth/react"
import { useRouter } from "next/navigation"
import Image from "next/image"

export default function LoginPage() {
  const router = useRouter()
  const [isRegister, setIsRegister] = useState(false)
  const [form, setForm] = useState({ name: "", email: "", password: "" })
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    setLoading(true)

    if (isRegister) {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      })
      const data = await res.json()
      if (!res.ok) {
        setError(data.error)
        setLoading(false)
        return
      }
    }

    const result = await signIn("credentials", {
      email: form.email,
      password: form.password,
      redirect: false,
    })

    if (result?.error) {
      setError("Invalid email or password")
      setLoading(false)
      return
    }

    router.push("/dashboard")
  }

  return (
    <div className="min-h-screen bg-gray-50 flex" style={{ fontFamily: "Inter, -apple-system, sans-serif" }}>
      {/* Left panel — branding */}
      <div className="hidden lg:flex flex-col justify-between w-[420px] bg-white border-r border-gray-100 px-12 py-10 flex-shrink-0">
        <div className="flex items-center gap-2.5">
          <Image src="/logo.png" alt="Acuity" width={32} height={32} />
          <span className="font-semibold text-gray-900 text-lg tracking-tight">Acuity</span>
        </div>

        <div>
          <h1 className="text-3xl font-semibold text-gray-900 leading-snug mb-4">
            Work on what <br /> matters most.
          </h1>
          <p className="text-gray-500 text-sm leading-relaxed">
            Acuity reduces decision fatigue by recommending one task at a time — based on your deadlines, focus state, and energy level.
          </p>

          <div className="mt-8 flex flex-col gap-4">
            {[
              { label: "AI task prioritization", desc: "Ranked by urgency, complexity, and deadline" },
              { label: "Focus mode", desc: "One task at a time to eliminate choice paralysis" },
              { label: "Engagement tracking", desc: "Browser-based signals keep you on track" },
            ].map((f) => (
              <div key={f.label} className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-blue-50 border border-blue-200 flex items-center justify-center mt-0.5 shrink-0">
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                    <path d="M2 5l2 2 4-4" stroke="#2563eb" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-800">{f.label}</p>
                  <p className="text-xs text-gray-400">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <p className="text-xs text-gray-300">© 2026 Acuity · HackinKaNalang</p>
      </div>

      {/* Right panel — form */}
      <div className="flex-1 flex items-center justify-center px-6 py-10">
        <div className="w-full max-w-sm">
          {/* Mobile logo */}
          <div className="flex items-center gap-2 mb-8 lg:hidden">
            <Image src="/logo.png" alt="Acuity" width={28} height={28} />
            <span className="font-semibold text-gray-900">Acuity</span>
          </div>

          <h2 className="text-2xl font-semibold text-gray-900 mb-1">
            {isRegister ? "Create your account" : "Welcome back"}
          </h2>
          <p className="text-sm text-gray-400 mb-7">
            {isRegister
              ? "Start managing your tasks with AI"
              : "Sign in to your workspace"}
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            {isRegister && (
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-medium text-gray-600">Full name</label>
                <input
                  name="name"
                  type="text"
                  placeholder="Maya Reyes"
                  value={form.name}
                  onChange={handleChange}
                  className="w-full border border-gray-200 rounded-lg px-3.5 py-2.5 text-sm text-gray-900 placeholder-gray-300 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all"
                  required
                />
              </div>
            )}

            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-medium text-gray-600">Email address</label>
              <input
                name="email"
                type="email"
                placeholder="maya@acuity.app"
                value={form.email}
                onChange={handleChange}
                className="w-full border border-gray-200 rounded-lg px-3.5 py-2.5 text-sm text-gray-900 placeholder-gray-300 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all"
                required
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <div className="flex items-center justify-between">
                <label className="text-xs font-medium text-gray-600">Password</label>
                {!isRegister && (
                  <button type="button" className="text-xs text-blue-600 hover:underline">
                    Forgot password?
                  </button>
                )}
              </div>
              <input
                name="password"
                type="password"
                placeholder="••••••••"
                value={form.password}
                onChange={handleChange}
                className="w-full border border-gray-200 rounded-lg px-3.5 py-2.5 text-sm text-gray-900 placeholder-gray-300 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all"
                required
              />
            </div>

            {error && (
              <div className="bg-red-50 border border-red-100 rounded-lg px-3.5 py-2.5">
                <p className="text-xs text-red-500">{error}</p>
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-600 hover:bg-blue-700 disabled:opacity-50 text-white rounded-lg py-2.5 text-sm font-medium transition-colors mt-1 cursor-pointer"
            >
              {loading
                ? "Please wait…"
                : isRegister
                ? "Create account"
                : "Sign in"}
            </button>
          </form>

          <p className="text-xs text-gray-400 text-center mt-6">
            {isRegister ? "Already have an account?" : "Don't have an account?"}{" "}
            <button
              type="button"
              className="text-blue-600 font-medium hover:underline"
              onClick={() => {
                setIsRegister(!isRegister)
                setError("")
              }}
            >
              {isRegister ? "Sign in" : "Sign up free"}
            </button>
          </p>
        </div>
      </div>
    </div>
  )
}