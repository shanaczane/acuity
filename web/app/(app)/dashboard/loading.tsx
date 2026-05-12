function Skeleton({ className }: { className?: string }) {
  return <div className={`bg-gray-100 rounded animate-pulse ${className}`} />
}

export default function DashboardLoading() {
  return (
    <div className="flex flex-col h-full overflow-hidden">
      {/* Topbar */}
      <div className="h-14 bg-white border-b border-gray-200 px-6 flex items-center gap-4 shrink-0">
        <div className="flex flex-col gap-1.5">
          <Skeleton className="h-3.5 w-24" />
          <Skeleton className="h-2.5 w-40" />
        </div>
        <div className="ml-auto flex items-center gap-3">
          <Skeleton className="h-7 w-28 rounded-lg" />
          <Skeleton className="h-7 w-44 rounded-lg" />
          <Skeleton className="h-7 w-28 rounded-lg" />
          <Skeleton className="h-7 w-24 rounded-lg" />
        </div>
      </div>

      {/* Table skeleton */}
      <div className="flex-1 overflow-hidden p-6">
        <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
          {/* Header */}
          <div className="flex items-center gap-4 px-4 py-3 border-b border-gray-100">
            <Skeleton className="h-2.5 w-8" />
            <Skeleton className="h-2.5 w-14" />
            <Skeleton className="h-2.5 w-14" />
            <Skeleton className="h-2.5 w-16" />
          </div>

          {/* Group header */}
          <div className="flex items-center gap-2 px-4 py-2.5 bg-gray-50 border-b border-gray-100">
            <Skeleton className="h-2 w-2 rounded-full" />
            <Skeleton className="h-2.5 w-24" />
            <Skeleton className="h-2.5 w-4" />
          </div>

          {/* Rows */}
          {Array.from({ length: 3 }).map((_, i) => (
            <div key={i} className="flex items-center gap-4 px-4 py-3 border-b border-gray-100">
              <Skeleton className="h-4 w-4 rounded-full shrink-0" />
              <Skeleton className="h-3 flex-1 max-w-xs" />
              <Skeleton className="h-5 w-14 rounded-full ml-auto" />
              <Skeleton className="h-5 w-20 rounded-full" />
              <Skeleton className="h-3 w-20" />
            </div>
          ))}

          {/* Group header */}
          <div className="flex items-center gap-2 px-4 py-2.5 bg-gray-50 border-b border-gray-100">
            <Skeleton className="h-2 w-2 rounded-full" />
            <Skeleton className="h-2.5 w-28" />
            <Skeleton className="h-2.5 w-4" />
          </div>

          {Array.from({ length: 3 }).map((_, i) => (
            <div key={i} className="flex items-center gap-4 px-4 py-3 border-b border-gray-100">
              <Skeleton className="h-4 w-4 rounded-full shrink-0" />
              <Skeleton className="h-3 flex-1 max-w-sm" />
              <Skeleton className="h-5 w-16 rounded-full ml-auto" />
              <Skeleton className="h-5 w-20 rounded-full" />
              <Skeleton className="h-3 w-24" />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
