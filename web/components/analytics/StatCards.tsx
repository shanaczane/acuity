import { CheckCircle, Flame, Clock, Zap } from "lucide-react"

const cards = [
  { icon: CheckCircle, iconColor: "text-blue-600", label: "Tasks completed", value: "128", sub: "+12 vs prev", subColor: "text-green-600" },
  { icon: Flame, iconColor: "text-amber-500", label: "Current streak", value: "14 days", sub: "Personal best", subColor: "text-gray-400" },
  { icon: Clock, iconColor: "text-blue-400", label: "Focus hours", value: "62.5 hrs", sub: "+8h vs prev", subColor: "text-green-600" },
  { icon: Zap, iconColor: "text-purple-500", label: "Peak hour", value: "10 AM", sub: "Most productive", subColor: "text-gray-400" },
]

export default function StatCards() {
  return (
    <div className="grid grid-cols-4 gap-4 mx-6 mt-4">
      {cards.map(({ icon: Icon, iconColor, label, value, sub, subColor }) => (
        <div key={label} className="bg-white border border-gray-200 rounded-[10px] p-5">
          <div className="flex items-center gap-2 mb-3">
            <Icon size={15} className={iconColor} />
            <span className="text-xs text-gray-500">{label}</span>
          </div>
          <p className="text-2xl font-bold text-gray-900 leading-none mb-1">{value}</p>
          <p className={`text-xs ${subColor}`}>{sub}</p>
        </div>
      ))}
    </div>
  )
}
