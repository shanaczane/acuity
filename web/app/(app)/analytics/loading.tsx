function Skeleton({ className }: { className?: string }) {
  return <div className={`bg-gray-100 rounded animate-pulse ${className}`} />
}

export default function AnalyticsLoading() {
  return (
    <div className="flex flex-col h-full overflow-hidden">
      {/* Topbar */}
      <div className="h-14 bg-white border-b border-gray-200 px-6 flex items-center shrink-0">
        <div className="flex-1 flex flex-col gap-1.5">
          <Skeleton className="h-3.5 w-20" />
          <Skeleton className="h-2.5 w-44" />
        </div>
        <Skeleton className="h-7 w-28 rounded-lg" />
      </div>

      <div className="flex-1 overflow-hidden p-6 flex flex-col gap-4">
        {/* Stat cards */}
        <div className="grid grid-cols-4 gap-4">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="bg-white border border-gray-200 rounded-[10px] p-5">
              <div className="flex items-center gap-2 mb-3">
                <Skeleton className="h-3.5 w-3.5 rounded" />
                <Skeleton className="h-2.5 w-24" />
              </div>
              <Skeleton className="h-7 w-16 mb-2" />
              <Skeleton className="h-2.5 w-20" />
            </div>
          ))}
        </div>

        {/* Heatmap */}
        <div className="bg-white border border-gray-200 rounded-[10px] p-5">
          <Skeleton className="h-3.5 w-16 mb-1.5" />
          <Skeleton className="h-2.5 w-56 mb-5" />
          <Skeleton className="h-36 w-full rounded-lg" />
        </div>

        {/* Charts */}
        <div className="grid grid-cols-2 gap-4">
          {Array.from({ length: 2 }).map((_, i) => (
            <div key={i} className="bg-white border border-gray-200 rounded-[10px] p-5">
              <Skeleton className="h-3.5 w-36 mb-1.5" />
              <Skeleton className="h-2.5 w-24 mb-5" />
              <Skeleton className="h-32 w-full rounded-lg" />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
