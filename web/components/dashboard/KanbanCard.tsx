import { Clock } from "lucide-react"
import StatusBadge from "@/components/ui/StatusBadge"
import type { Task } from "@/lib/mockData"

export default function KanbanCard({ task }: { task: Task }) {
  return (
    <div className={`bg-white border border-gray-200 rounded-[10px] px-3.5 py-3 ${task.done ? "opacity-60" : ""}`}>
      <p className={`text-sm text-gray-900 mb-2 leading-snug ${task.done ? "line-through text-gray-400" : ""}`}>
        {task.title}
      </p>
      <div className="flex items-center gap-2 flex-wrap">
        <StatusBadge status={task.status} />
        <span className={`flex items-center gap-1 text-xs ${task.deadlineUrgent ? "text-red-500" : "text-gray-400"}`}>
          <Clock size={11} />
          {task.deadline}
        </span>
      </div>
    </div>
  )
}
