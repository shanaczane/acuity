const WEEKS = 17
const DAYS = 7
const MONTHS = ["Feb", "Mar", "Apr", "May"]

const COLORS = ["#f3f4f6", "#bfdbfe", "#93c5fd", "#3b82f6", "#1d4ed8"]

function seededRandom(seed: number) {
  let s = seed
  return () => {
    s = (s * 1664525 + 1013904223) & 0xffffffff
    return (s >>> 0) / 0xffffffff
  }
}

function generateData() {
  const rng = seededRandom(42)
  return Array.from({ length: WEEKS }, () =>
    Array.from({ length: DAYS }, () => {
      const r = rng()
      if (r < 0.18) return 0
      if (r < 0.40) return 1
      if (r < 0.65) return 2
      if (r < 0.85) return 3
      return 4
    })
  )
}

const data = generateData()

const DAY_LABELS = ["Mon", "", "Wed", "", "Fri", "", "Sun"]
const MONTH_POSITIONS = [0, 4, 8, 13]

export default function Heatmap() {
  const activeDays = data.flat().filter((v) => v > 0).length

  return (
    <div className="mx-6 mt-4 bg-white border border-gray-200 rounded-[10px] p-5">
      <p className="text-sm font-semibold text-gray-900 leading-none mb-0.5">Activity</p>
      <p className="text-xs text-gray-400 mb-4">Daily productivity over the last 17 weeks</p>

      <div className="flex gap-3">
        {/* Day labels */}
        <div className="flex flex-col gap-[3px] justify-start pt-5">
          {DAY_LABELS.map((d, i) => (
            <div key={i} style={{ width: 24, height: 16, fontSize: 10, color: "#9ca3af", lineHeight: "16px" }}>
              {d}
            </div>
          ))}
        </div>

        <div className="flex-1">
          {/* Month labels */}
          <div className="flex mb-1" style={{ gap: 3 }}>
            {Array.from({ length: WEEKS }, (_, w) => {
              const idx = MONTH_POSITIONS.indexOf(w)
              return (
                <div key={w} style={{ width: 16, fontSize: 10, color: "#9ca3af", textAlign: "left" }}>
                  {idx >= 0 ? MONTHS[idx] : ""}
                </div>
              )
            })}
          </div>

          {/* Grid */}
          <div className="flex" style={{ gap: 3 }}>
            {data.map((week, w) => (
              <div key={w} className="flex flex-col" style={{ gap: 3 }}>
                {week.map((level, d) => (
                  <div
                    key={d}
                    style={{
                      width: 16,
                      height: 16,
                      borderRadius: 3,
                      backgroundColor: COLORS[level],
                    }}
                  />
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between mt-3">
        <p className="text-xs text-gray-500">
          Total: <span className="font-semibold text-blue-600">{activeDays} active days</span>
        </p>
        <div className="flex items-center gap-1.5 text-xs text-gray-400">
          Less
          {COLORS.map((c) => (
            <span key={c} style={{ width: 11, height: 11, borderRadius: 2, backgroundColor: c, display: "inline-block" }} />
          ))}
          More
        </div>
      </div>
    </div>
  )
}
