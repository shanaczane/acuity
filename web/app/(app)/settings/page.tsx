"use client"

import { useState } from "react"
import PrivacyTab from "@/components/settings/PrivacyTab"
import ScheduleTab from "@/components/settings/ScheduleTab"

type Tab = "Privacy" | "Schedule" | "Account" | "Notifications"
const TABS: Tab[] = ["Privacy", "Schedule", "Account", "Notifications"]

export default function SettingsPage() {
  const [tab, setTab] = useState<Tab>("Privacy")

  return (
    <div className="flex flex-col h-full overflow-hidden" style={{ fontFamily: "Inter, -apple-system, sans-serif" }}>
      {/* Topbar */}
      <div className="bg-white border-b border-gray-200 shrink-0">
        <div className="h-14 px-6 flex items-center">
          <div>
            <p className="text-sm font-bold text-gray-900 leading-none">Settings</p>
            <p className="text-xs text-gray-400 mt-0.5">Privacy &amp; schedule</p>
          </div>
        </div>
        {/* Tab nav */}
        <div className="flex px-6 gap-6">
          {TABS.map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={`pb-2.5 text-sm transition-colors border-b-2 ${
                tab === t
                  ? "text-gray-900 font-medium border-blue-600"
                  : "text-gray-500 border-transparent hover:text-gray-700"
              }`}
            >
              {t}
            </button>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto px-6 py-5">
        {tab === "Privacy" && <PrivacyTab />}
        {tab === "Schedule" && <ScheduleTab />}
        {tab === "Account" && (
          <p className="text-sm text-gray-400">Account settings coming soon.</p>
        )}
        {tab === "Notifications" && (
          <p className="text-sm text-gray-400">Notification settings coming soon.</p>
        )}
      </div>
    </div>
  )
}
