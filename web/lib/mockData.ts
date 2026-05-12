export type Priority = "High" | "Medium" | "Low"
export type Status = "In progress" | "Not started" | "In review" | "Done"

export interface Task {
  id: string
  title: string
  priority: Priority
  status: Status
  deadline: string
  deadlineUrgent: boolean
  done: boolean
  recommended?: boolean
}

export const TASKS: Task[] = [
  { id: "1", title: "Finish CS150 problem set 4", priority: "High", status: "In progress", deadline: "Today · 11:59 PM", deadlineUrgent: true, done: false, recommended: true },
  { id: "2", title: "Read Chapter 7 — Operating Systems", priority: "High", status: "Not started", deadline: "Tomorrow", deadlineUrgent: true, done: false },
  { id: "3", title: "Submit Linear Algebra lab report", priority: "High", status: "In review", deadline: "Tomorrow · 9 AM", deadlineUrgent: true, done: false },
  { id: "4", title: "Revise capstone project proposal", priority: "Medium", status: "In progress", deadline: "Thu, May 14", deadlineUrgent: false, done: false },
  { id: "5", title: "Lecture review — Computer Networks", priority: "Medium", status: "Not started", deadline: "Fri, May 15", deadlineUrgent: false, done: false },
  { id: "6", title: "Update GitHub README for capstone", priority: "Medium", status: "In progress", deadline: "Sat, May 16", deadlineUrgent: false, done: false },
  { id: "7", title: "Watch supplementary video — Distributed Systems", priority: "Low", status: "Not started", deadline: "Next week", deadlineUrgent: false, done: false },
  { id: "8", title: "Organize Notion course folders", priority: "Low", status: "Not started", deadline: "No deadline", deadlineUrgent: false, done: false },
  { id: "9", title: "Reply to study group on Discord", priority: "Low", status: "Done", deadline: "Yesterday", deadlineUrgent: false, done: true },
]
