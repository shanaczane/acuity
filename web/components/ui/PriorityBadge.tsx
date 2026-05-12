type Priority = "High" | "Medium" | "Low"

const styles: Record<Priority, string> = {
  High: "bg-red-50 text-red-600",
  Medium: "bg-amber-50 text-amber-600",
  Low: "bg-green-50 text-green-600",
}

const dotColors: Record<Priority, string> = {
  High: "bg-red-500",
  Medium: "bg-amber-500",
  Low: "bg-green-500",
}

export default function PriorityBadge({ priority }: { priority: Priority }) {
  return (
    <span className={`inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-xs font-medium ${styles[priority]}`}>
      <span className={`w-1.5 h-1.5 rounded-full ${dotColors[priority]}`} />
      {priority}
    </span>
  )
}
