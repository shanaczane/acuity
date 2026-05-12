"use client"

import { useState, Fragment } from "react"
import { ChevronDown, ChevronRight } from "lucide-react"
import TaskRow from "./TaskRow"
import type { Task, Priority } from "@/lib/mockData"

const groups: { priority: Priority; dot: string }[] = [
  { priority: "High", dot: "bg-red-500" },
  { priority: "Medium", dot: "bg-amber-500" },
  { priority: "Low", dot: "bg-green-500" },
]

export default function TableView({ tasks }: { tasks: Task[] }) {
  const [collapsed, setCollapsed] = useState<Record<string, boolean>>({})

  const toggle = (p: string) => setCollapsed((prev) => ({ ...prev, [p]: !prev[p] }))

  return (
    <div className="mx-6 mt-4 bg-white border border-gray-200 rounded-xl overflow-hidden">
      <table className="w-full table-fixed">
        <thead>
          <tr className="border-b border-gray-100">
            <th className="py-2.5 pl-4 pr-2 text-left text-[11px] uppercase tracking-wide text-gray-400 font-semibold">Task</th>
            <th className="py-2.5 px-2 w-[120px] text-left text-[11px] uppercase tracking-wide text-gray-400 font-semibold">Priority</th>
            <th className="py-2.5 px-2 w-[120px] text-left text-[11px] uppercase tracking-wide text-gray-400 font-semibold">Status</th>
            <th className="py-2.5 px-2 w-[140px] text-left text-[11px] uppercase tracking-wide text-gray-400 font-semibold">Deadline</th>
            <th className="py-2.5 pr-3 w-[40px]" />
          </tr>
        </thead>
        <tbody>
          {groups.map(({ priority, dot }) => {
            const groupTasks = tasks.filter((t) => t.priority === priority)
            const isCollapsed = collapsed[priority]
            return (
              <Fragment key={priority}>
                <tr
                  className="bg-gray-50 border-b border-gray-100 cursor-pointer hover:bg-gray-100 transition-colors"
                  onClick={() => toggle(priority)}
                >
                  <td colSpan={5} className="py-2 pl-4">
                    <div className="flex items-center gap-2">
                      {isCollapsed ? <ChevronRight size={13} className="text-gray-400" /> : <ChevronDown size={13} className="text-gray-400" />}
                      <span className={`w-2 h-2 rounded-full ${dot}`} />
                      <span className="text-xs font-semibold text-gray-600">{priority} priority</span>
                      <span className="text-xs text-gray-400">{groupTasks.length}</span>
                    </div>
                  </td>
                </tr>
                {!isCollapsed && groupTasks.map((task) => (
                  <TaskRow key={task.id} task={task} />
                ))}
              </Fragment>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}
