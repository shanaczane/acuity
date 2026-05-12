"use client"

import {
  BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer,
  LineChart, Line, ReferenceLine,
} from "recharts"

const focusData = [
  { day: "Mon", hours: 4.2 },
  { day: "Tue", hours: 5.8 },
  { day: "Wed", hours: 6.5 },
  { day: "Thu", hours: 3.1 },
  { day: "Fri", hours: 4.7 },
  { day: "Sat", hours: 2.0 },
  { day: "Sun", hours: 1.4 },
]

const peakData = [
  { hour: "12a", score: 5 },
  { hour: "2a", score: 3 },
  { hour: "4a", score: 2 },
  { hour: "6a", score: 8 },
  { hour: "8a", score: 45 },
  { hour: "10a", score: 92 },
  { hour: "12p", score: 68 },
  { hour: "2p", score: 55 },
  { hour: "4p", score: 40 },
  { hour: "6p", score: 30 },
  { hour: "8p", score: 22 },
  { hour: "10p", score: 10 },
  { hour: "12a", score: 5 },
]

function CustomBarLabel({ x, y, width, value }: { x?: number; y?: number; width?: number; value?: number }) {
  if (!value) return null
  return (
    <text x={(x ?? 0) + (width ?? 0) / 2} y={(y ?? 0) - 4} textAnchor="middle" fontSize={10} fill="#6b7280">
      {value}h
    </text>
  )
}

export default function ProductivityCharts() {
  return (
    <div className="mx-6 mt-4 grid grid-cols-2 gap-4 pb-6">
      {/* Focus hours bar chart */}
      <div className="bg-white border border-gray-200 rounded-[10px] p-5">
        <p className="text-sm font-semibold text-gray-900 leading-none mb-0.5">Focus hours this week</p>
        <p className="text-xs text-gray-400 mb-4">May 5 – May 11</p>
        <ResponsiveContainer width="100%" height={160}>
          <BarChart data={focusData} barCategoryGap="30%">
            <XAxis dataKey="day" tick={{ fontSize: 11, fill: "#9ca3af" }} axisLine={false} tickLine={false} />
            <YAxis hide />
            <Tooltip
              formatter={(v: number) => [`${v}h`, "Focus"]}
              contentStyle={{ fontSize: 12, borderRadius: 8, border: "1px solid #e5e7eb" }}
              cursor={{ fill: "#f9fafb" }}
            />
            <Bar dataKey="hours" fill="#3b82f6" radius={[4, 4, 0, 0]} label={<CustomBarLabel />} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Peak hours line chart */}
      <div className="bg-white border border-gray-200 rounded-[10px] p-5">
        <p className="text-sm font-semibold text-gray-900 leading-none mb-0.5">Peak productivity hours</p>
        <p className="text-xs text-gray-400 mb-4">When you focus best across 24h</p>
        <ResponsiveContainer width="100%" height={120}>
          <LineChart data={peakData}>
            <XAxis dataKey="hour" tick={{ fontSize: 10, fill: "#9ca3af" }} axisLine={false} tickLine={false} interval={1} />
            <YAxis hide />
            <Tooltip
              formatter={(v: number) => [`${v}`, "Score"]}
              contentStyle={{ fontSize: 12, borderRadius: 8, border: "1px solid #e5e7eb" }}
            />
            <ReferenceLine x="10a" stroke="#2563eb" strokeDasharray="3 3" label={{ value: "10a peak", position: "top", fontSize: 10, fill: "#2563eb" }} />
            <Line type="monotone" dataKey="score" stroke="#3b82f6" strokeWidth={2} dot={false} />
          </LineChart>
        </ResponsiveContainer>
        <div className="mt-3 text-xs text-gray-500 bg-blue-50 rounded-lg px-3 py-2 leading-relaxed">
          You&apos;re sharpest <strong>9 AM – 11 AM</strong>. Acuity now schedules deep-work tasks{" "}
          <span className="text-blue-600 underline cursor-pointer">here automatically</span>.
        </div>
      </div>
    </div>
  )
}
