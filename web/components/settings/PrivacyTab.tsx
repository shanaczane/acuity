"use client"

import { useState } from "react"
import { X, Plus } from "lucide-react"

interface Site {
  domain: string
  brand: string
  color: string
  letter: string
  global: boolean
}

const initialSites: Site[] = [
  { domain: "bankofamerica.com", brand: "Bank of America", color: "#1565c0", letter: "B", global: true },
  { domain: "mychart.org", brand: "MyChart", color: "#0f766e", letter: "M", global: true },
  { domain: "discord.com", brand: "Discord", color: "#5865f2", letter: "D", global: false },
  { domain: "messenger.com", brand: "Messenger", color: "#1877f2", letter: "M", global: false },
  { domain: "instagram.com", brand: "Instagram", color: "#e4405f", letter: "I", global: false },
]

export default function PrivacyTab() {
  const [sites, setSites] = useState(initialSites)

  const remove = (domain: string) =>
    setSites((prev) => prev.filter((s) => s.domain !== domain))

  return (
    <div>
      <div className="flex items-start justify-between mb-4">
        <div>
          <p className="text-sm font-semibold text-gray-900">Sensitive site configuration</p>
          <p className="text-xs text-gray-500 mt-0.5 max-w-lg">
            Acuity will not parse engagement data on these domains. Global blocklist applies automatically.
          </p>
        </div>
        <button className="flex items-center gap-1.5 border border-gray-200 rounded-lg px-3 py-1.5 text-xs text-gray-600 hover:bg-gray-50 transition-colors shrink-0">
          <Plus size={12} />
          Add site
        </button>
      </div>

      <div className="bg-white border border-gray-200 rounded-[10px] overflow-hidden">
        {sites.map((site, i) => (
          <div
            key={site.domain}
            className={`flex items-center gap-3 px-4 py-3 ${i < sites.length - 1 ? "border-b border-gray-50" : ""}`}
          >
            <div
              className="w-8 h-8 rounded-lg flex items-center justify-center text-white text-sm font-semibold shrink-0"
              style={{ backgroundColor: site.color }}
            >
              {site.letter}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm text-gray-900">{site.domain}</p>
              <p className="text-xs text-gray-400">{site.brand}</p>
            </div>
            <span className="text-xs text-gray-500 border border-gray-200 rounded-full px-2 py-0.5 shrink-0">
              {site.global ? "Global" : "Personal"}
            </span>
            {!site.global && (
              <button
                onClick={() => remove(site.domain)}
                className="p-1 rounded hover:bg-gray-100 text-gray-400 hover:text-gray-600 ml-1"
              >
                <X size={14} />
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
