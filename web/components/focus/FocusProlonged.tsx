"use client"

function formatTime(seconds: number) {
  const m = Math.floor(seconds / 60).toString().padStart(2, "0")
  const s = (seconds % 60).toString().padStart(2, "0")
  return `${m}:${s}`
}

export default function FocusProlonged({ elapsed }: { elapsed: number }) {
  return (
    <div className="flex flex-col items-center text-center">
      {/* Breathing circle */}
      <div className="relative flex items-center justify-center w-20 h-20 mb-8">
        <div className="absolute inset-0 rounded-full border-[1.5px] border-blue-200 animate-[ping_3s_ease-in-out_infinite] opacity-60" />
        <div className="absolute inset-0 rounded-full border-[1.5px] border-blue-200" />
        <div className="w-4 h-4 rounded-full bg-blue-500" />
      </div>

      <p className="text-[10px] uppercase tracking-[0.18em] text-gray-400 mb-6">
        Breathe In · Session 02
      </p>

      <p className="text-sm italic text-gray-400 mb-2">Current task:</p>

      <h1 className="text-[48px] font-bold text-gray-900 leading-tight mb-10 max-w-xl">
        Finish CS150 problem set 4
      </h1>

      <div className="flex items-start gap-12">
        {[
          { label: "Elapsed", value: formatTime(elapsed), highlight: false },
          { label: "Engagement", value: "High", highlight: true },
          { label: "Goal", value: "45 min", highlight: false },
        ].map(({ label, value, highlight }) => (
          <div key={label} className="flex flex-col items-center gap-1">
            <span className="text-[10px] uppercase tracking-[0.12em] text-gray-400 font-semibold">{label}</span>
            <span className={`text-sm font-semibold ${highlight ? "text-blue-600" : "text-gray-700"}`}>{value}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
