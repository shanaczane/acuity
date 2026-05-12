"use client"

import { useState } from "react"
import Link from "next/link"
import { LayoutList, Columns, Search, Calendar, Plus, Focus } from "lucide-react"
import TableView from "@/components/dashboard/TableView"
import KanbanView from "@/components/dashboard/KanbanView"
import AddTaskModal from "@/components/dashboard/AddTaskModal"
import { TASKS } from "@/lib/mockData"

type View = "table" | "kanban"

export default function DashboardPage() {
  const [view, setView] = useState<View>("table")
  const [showModal, setShowModal] = useState(false)

  return (
    <div className="flex flex-col h-full overflow-hidden">
      {/* Topbar */}
      <div className="h-14 bg-white border-b border-gray-200 px-6 flex items-center gap-4 shrink-0">
        {/* Title */}
        <div className="min-w-0">
          <p className="text-sm font-bold text-gray-900 leading-none">Dashboard</p>
          <p className="text-xs text-gray-400 mt-0.5">
            Management mode · {TASKS.length} tasks · {view === "table" ? "Table" : "Kanban"} view
          </p>
        </div>

        {/* Toggle */}
        <div className="flex items-center border border-gray-200 rounded-lg overflow-hidden ml-auto">
          <button
            onClick={() => setView("table")}
            className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium transition-colors ${
              view === "table" ? "bg-gray-50 text-gray-900" : "text-gray-400 hover:text-gray-600"
            }`}
          >
            <LayoutList size={13} />
            Table
          </button>
          <div className="w-px h-5 bg-gray-200" />
          <button
            onClick={() => setView("kanban")}
            className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium transition-colors ${
              view === "kanban" ? "bg-gray-50 text-gray-900" : "text-gray-400 hover:text-gray-600"
            }`}
          >
            <Columns size={13} />
            Kanban
          </button>
        </div>

        {/* Search */}
        <div className="flex items-center gap-2 border border-gray-200 rounded-lg px-3 py-1.5 w-52">
          <Search size={13} className="text-gray-400 shrink-0" />
          <input
            type="text"
            placeholder="Search tasks…"
            className="flex-1 text-xs text-gray-700 placeholder-gray-400 outline-none bg-transparent"
          />
          <span className="text-[10px] text-gray-300 border border-gray-200 rounded px-1 py-0.5 shrink-0">⌘K</span>
        </div>

        {/* Date chip */}
        <div className="flex items-center gap-1.5 border border-gray-200 rounded-lg px-3 py-1.5 text-xs text-gray-600">
          <Calendar size={13} className="text-gray-400" />
          Mon, May 11
        </div>

        {/* Add task */}
        <button
          onClick={() => setShowModal(true)}
          className="flex items-center gap-1.5 bg-blue-600 hover:bg-blue-700 text-white text-xs font-medium px-3 py-2 rounded-lg transition-colors"
        >
          <Plus size={13} />
          Add task
        </button>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto py-2 pb-20">
        {view === "table" ? (
          <TableView tasks={TASKS} />
        ) : (
          <KanbanView tasks={TASKS} />
        )}
      </div>

      {/* Start Focus FAB */}
      <Link
        href="/focus"
        className="fixed bottom-6 right-6 flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-5 py-3 rounded-full shadow-lg transition-colors z-40"
      >
        <Focus size={16} />
        Start focus
      </Link>

      {showModal && <AddTaskModal onClose={() => setShowModal(false)} />}
    </div>
  )
}
