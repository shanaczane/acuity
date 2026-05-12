import { Calendar } from "lucide-react"
import StatCards from "@/components/analytics/StatCards"
import Heatmap from "@/components/analytics/Heatmap"
import ProductivityCharts from "@/components/analytics/ProductivityCharts"

export default function AnalyticsPage() {
  return (
    <div className="flex flex-col h-full overflow-hidden" style={{ fontFamily: "Inter, -apple-system, sans-serif" }}>
      {/* Topbar */}
      <div className="h-14 bg-white border-b border-gray-200 px-6 flex items-center shrink-0">
        <div className="flex-1">
          <p className="text-sm font-bold text-gray-900 leading-none">Analytics</p>
          <p className="text-xs text-gray-400 mt-0.5">Productivity insights · last 90 days</p>
        </div>
        <button className="flex items-center gap-1.5 border border-gray-200 rounded-lg px-3 py-1.5 text-xs text-gray-600 hover:bg-gray-50 transition-colors">
          <Calendar size={13} className="text-gray-400" />
          Last 90 days
        </button>
      </div>

      {/* Scrollable content */}
      <div className="flex-1 overflow-y-auto">
        <StatCards />
        <Heatmap />
        <ProductivityCharts />
      </div>
    </div>
  )
}
