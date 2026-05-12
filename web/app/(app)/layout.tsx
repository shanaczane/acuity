import Sidebar from "@/components/layout/Sidebar"

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen overflow-hidden bg-gray-50" style={{ fontFamily: "Inter, -apple-system, sans-serif" }}>
      <Sidebar />
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        {children}
      </div>
    </div>
  )
}
