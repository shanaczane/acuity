function Skeleton({ className }: { className?: string }) {
  return <div className={`bg-gray-100 rounded animate-pulse ${className}`} />
}

export default function SettingsLoading() {
  return (
    <div className="flex flex-col h-full overflow-hidden">
      {/* Topbar */}
      <div className="bg-white border-b border-gray-200 shrink-0">
        <div className="h-14 px-6 flex items-center gap-4">
          <div className="flex flex-col gap-1.5">
            <Skeleton className="h-3.5 w-16" />
            <Skeleton className="h-2.5 w-28" />
          </div>
        </div>
        {/* Tab placeholders */}
        <div className="flex px-6 gap-6 pb-px">
          {Array.from({ length: 4 }).map((_, i) => (
            <Skeleton key={i} className="h-3 w-16 mb-3" />
          ))}
        </div>
      </div>

      <div className="flex-1 overflow-hidden px-6 py-5 flex flex-col gap-4">
        {/* Section header */}
        <div className="flex items-center justify-between">
          <div className="flex flex-col gap-1.5">
            <Skeleton className="h-3.5 w-44" />
            <Skeleton className="h-2.5 w-80" />
          </div>
          <Skeleton className="h-7 w-20 rounded-lg" />
        </div>

        {/* Site rows */}
        <div className="bg-white border border-gray-200 rounded-[10px] overflow-hidden">
          {Array.from({ length: 5 }).map((_, i) => (
            <div key={i} className={`flex items-center gap-3 px-4 py-3 ${i < 4 ? "border-b border-gray-50" : ""}`}>
              <Skeleton className="w-8 h-8 rounded-lg shrink-0" />
              <div className="flex-1 flex flex-col gap-1.5">
                <Skeleton className="h-3 w-36" />
                <Skeleton className="h-2.5 w-24" />
              </div>
              <Skeleton className="h-5 w-14 rounded-full" />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
