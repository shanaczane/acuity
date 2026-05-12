"use client"

import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { LayoutDashboard, BarChart2, Settings, Flame, ChevronDown } from "lucide-react"

const navItems = [
  { href: "/dashboard", label: "Dashboard", icon: LayoutDashboard, badge: 12 },
  { href: "/analytics", label: "Analytics", icon: BarChart2 },
  { href: "/settings", label: "Settings", icon: Settings },
]

export default function Sidebar() {
  const pathname = usePathname()

  return (
    <aside
      className="w-[230px] shrink-0 bg-white border-r border-gray-200 flex flex-col h-screen"
      style={{ fontFamily: "Inter, -apple-system, sans-serif" }}
    >
      {/* Logo */}
      <div className="px-5 py-4 border-b border-gray-100">
        <Link href="/dashboard" className="flex items-center gap-2.5">
          <Image src="/logo.png" alt="Acuity" width={28} height={28} />
          <div>
            <p className="text-sm font-semibold text-gray-900 leading-none tracking-tight">Acuity</p>
            <p className="text-xs text-gray-400 mt-0.5">Workspace</p>
          </div>
        </Link>
      </div>

      {/* Nav */}
      <nav className="px-3 pt-4 flex-1">
        <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider px-2 mb-2">Workspace</p>
        {navItems.map(({ href, label, icon: Icon, badge }) => {
          const active = pathname.startsWith(href)
          return (
            <Link
              key={href}
              href={href}
              className={`flex items-center gap-2.5 px-2 py-2 rounded-md text-sm mb-0.5 transition-colors ${
                active
                  ? "bg-gray-50 text-gray-900 font-medium border-l-[3px] border-blue-600 pl-[5px]"
                  : "text-gray-500 hover:bg-gray-50 hover:text-gray-700"
              }`}
            >
              <Icon size={16} className={active ? "text-blue-600" : "text-gray-400"} />
              <span className="flex-1">{label}</span>
              {badge && (
                <span className="text-xs bg-gray-100 text-gray-500 px-1.5 py-0.5 rounded-full font-medium">
                  {badge}
                </span>
              )}
            </Link>
          )
        })}
      </nav>

      {/* Today summary */}
      <div className="px-5 py-3 border-t border-gray-100">
        <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">Today</p>
        <p className="text-xs text-gray-500 mb-1">
          <span className="w-2 h-2 rounded-full bg-blue-500 inline-block mr-1.5 align-middle" />
          3 of 7 tasks done
        </p>
        <p className="text-xs text-gray-500">
          <Flame size={12} className="inline text-amber-500 mr-1" />
          14-day streak
        </p>
      </div>

      {/* User */}
      <div className="px-4 py-3 border-t border-gray-100 flex items-center gap-2.5">
        <div className="w-7 h-7 rounded-full bg-blue-600 flex items-center justify-center text-white text-xs font-semibold shrink-0">
          MR
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-xs font-medium text-gray-900 truncate">Maya Reyes</p>
          <p className="text-xs text-gray-400">Pro · CS major</p>
        </div>
        <ChevronDown size={14} className="text-gray-400 shrink-0" />
      </div>
    </aside>
  )
}
