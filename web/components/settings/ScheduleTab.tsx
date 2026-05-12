"use client"

import { useState } from "react"
import { X, Plus, Clock } from "lucide-react"

interface Slot {
  from: string
  to: string
}

interface DaySchedule {
  day: string
  enabled: boolean
  slots: Slot[]
}

const initialDays: DaySchedule[] = [
  { day: "Mon", enabled: true, slots: [{ from: "09:00", to: "12:00" }, { from: "14:00", to: "17:00" }] },
  { day: "Tue", enabled: true, slots: [{ from: "09:00", to: "12:00" }] },
  { day: "Wed", enabled: true, slots: [{ from: "10:00", to: "12:00" }, { from: "15:00", to: "18:00" }] },
  { day: "Thu", enabled: false, slots: [] },
  { day: "Fri", enabled: false, slots: [] },
]

function Toggle({ on, onChange }: { on: boolean; onChange: () => void }) {
  return (
    <button
      onClick={onChange}
      className={`relative w-9 h-5 rounded-full transition-colors ${on ? "bg-blue-600" : "bg-gray-200"}`}
    >
      <span
        className={`absolute top-0.5 w-4 h-4 rounded-full bg-white shadow transition-all ${on ? "left-[18px]" : "left-0.5"}`}
      />
    </button>
  )
}

export default function ScheduleTab() {
  const [days, setDays] = useState(initialDays)

  const toggleDay = (i: number) =>
    setDays((prev) => prev.map((d, idx) => idx === i ? { ...d, enabled: !d.enabled } : d))

  const removeSlot = (dayIdx: number, slotIdx: number) =>
    setDays((prev) => prev.map((d, i) =>
      i === dayIdx ? { ...d, slots: d.slots.filter((_, si) => si !== slotIdx) } : d
    ))

  const addSlot = (dayIdx: number) =>
    setDays((prev) => prev.map((d, i) =>
      i === dayIdx ? { ...d, slots: [...d.slots, { from: "09:00", to: "10:00" }] } : d
    ))

  return (
    <div>
      <div className="mb-4">
        <p className="text-sm font-semibold text-gray-900">Scheduled focus times</p>
        <p className="text-xs text-gray-500 mt-0.5">
          Acuity&apos;s monitoring extension auto-enables during these blocks.
        </p>
      </div>

      <div className="bg-white border border-gray-200 rounded-[10px] overflow-hidden">
        {days.map((d, dayIdx) => (
          <div key={d.day} className={`px-4 py-3 ${dayIdx < days.length - 1 ? "border-b border-gray-100" : ""}`}>
            <div className="flex items-start gap-3">
              <Toggle on={d.enabled} onChange={() => toggleDay(dayIdx)} />
              <span className="text-sm font-semibold text-gray-900 w-10 pt-0.5">{d.day}</span>
              <div className="flex-1">
                {d.slots.map((slot, slotIdx) => (
                  <div key={slotIdx} className="flex items-center gap-2 mb-2">
                    <div className="flex items-center gap-1 border border-gray-200 rounded-lg px-2.5 py-1.5 text-xs text-gray-700">
                      <Clock size={11} className="text-gray-400" />
                      {slot.from}
                    </div>
                    <span className="text-gray-400 text-xs">→</span>
                    <div className="flex items-center gap-1 border border-gray-200 rounded-lg px-2.5 py-1.5 text-xs text-gray-700">
                      <Clock size={11} className="text-gray-400" />
                      {slot.to}
                    </div>
                    <button
                      onClick={() => removeSlot(dayIdx, slotIdx)}
                      className="p-1 rounded hover:bg-gray-100 text-gray-400"
                    >
                      <X size={12} />
                    </button>
                  </div>
                ))}
                <button
                  onClick={() => addSlot(dayIdx)}
                  className="flex items-center gap-1 text-xs text-blue-600 hover:underline mt-1"
                >
                  <Plus size={11} />
                  Add slot
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
