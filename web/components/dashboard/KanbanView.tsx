import { Plus } from "lucide-react"
import KanbanCard from "./KanbanCard"
import type { Task, Priority } from "@/lib/mockData"

const columns: { priority: Priority; dot: string }[] = [
  { priority: "High", dot: "bg-red-500" },
  { priority: "Medium", dot: "bg-amber-500" },
  { priority: "Low", dot: "bg-green-500" },
]

export default function KanbanView({ tasks }: { tasks: Task[] }) {
  return (
    <div className="mx-6 mt-4 grid grid-cols-3 gap-4 flex-1 overflow-hidden">
      {columns.map(({ priority, dot }) => {
        const colTasks = tasks.filter((t) => t.priority === priority)
        return (
          <div key={priority} className="flex flex-col overflow-hidden">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <span className={`w-2 h-2 rounded-full ${dot}`} />
                <span className="text-sm font-semibold text-gray-700">{priority}</span>
                <span className="text-xs text-gray-400">{colTasks.length}</span>
              </div>
              <button className="p-1 rounded hover:bg-gray-100 text-gray-400 hover:text-gray-600">
                <Plus size={14} />
              </button>
            </div>
            <div className="flex flex-col gap-2 overflow-y-auto pb-4">
              {colTasks.map((task) => (
                <KanbanCard key={task.id} task={task} />
              ))}
            </div>
          </div>
        )
      })}
    </div>
  )
}
