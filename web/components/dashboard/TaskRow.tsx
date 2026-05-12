"use client"

import { Pencil, MoreHorizontal } from "lucide-react"
import PriorityBadge from "@/components/ui/PriorityBadge"
import StatusBadge from "@/components/ui/StatusBadge"
import type { Task } from "@/lib/mockData"

export default function TaskRow({ task }: { task: Task }) {
  return (
    <tr className="group border-b border-gray-100 hover:bg-gray-50 transition-colors">
      {/* Checkbox + title */}
      <td className="py-2.5 pl-4 pr-2 flex items-center gap-2.5">
        <button className={`w-4 h-4 rounded-full border shrink-0 flex items-center justify-center transition-colors ${
          task.done
            ? "bg-gray-300 border-gray-300"
            : task.status === "In progress"
            ? "border-blue-500 bg-blue-50"
            : "border-gray-300"
        }`}>
          {task.done && (
            <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
              <path d="M1.5 4l1.5 1.5 3.5-3" stroke="white" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          )}
        </button>
        <span className={`text-sm truncate max-w-xs ${task.done ? "line-through text-gray-400" : "text-gray-900"}`}>
          {task.title}
        </span>
        {task.recommended && !task.done && (
          <span className="text-[10px] font-semibold uppercase tracking-wide bg-green-50 text-green-600 px-1.5 py-0.5 rounded shrink-0">
            Recommended
          </span>
        )}
      </td>

      {/* Priority */}
      <td className="py-2.5 px-2 w-[120px]">
        <PriorityBadge priority={task.priority} />
      </td>

      {/* Status */}
      <td className="py-2.5 px-2 w-[120px]">
        <StatusBadge status={task.status} />
      </td>

      {/* Deadline */}
      <td className={`py-2.5 px-2 w-[140px] text-xs ${task.deadlineUrgent ? "text-red-500 font-medium" : "text-gray-500"}`}>
        {task.deadline}
      </td>

      {/* Actions */}
      <td className="py-2.5 pr-3 w-[40px]">
        <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
          <button className="p-1 rounded hover:bg-gray-100 text-gray-400 hover:text-gray-600">
            <Pencil size={13} />
          </button>
          <button className="p-1 rounded hover:bg-gray-100 text-gray-400 hover:text-gray-600">
            <MoreHorizontal size={13} />
          </button>
        </div>
      </td>
    </tr>
  )
}
