export default function FocusLoading() {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center"
      style={{ background: "#f5f5f0" }}
    >
      <div className="flex flex-col items-center gap-4">
        <div className="w-16 h-16 rounded-full border-[1.5px] border-blue-200 animate-pulse" />
        <div className="h-3 w-48 bg-gray-200 rounded animate-pulse" />
        <div className="h-10 w-72 bg-gray-200 rounded animate-pulse" />
      </div>
    </div>
  )
}
