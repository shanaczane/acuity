type Status = "In progress" | "Not started" | "In review" | "Done"

const styles: Record<Status, string> = {
  "In progress": "bg-blue-50 text-blue-600",
  "Not started": "bg-gray-50 text-gray-500 border border-gray-200",
  "In review": "bg-amber-50 text-amber-600",
  "Done": "bg-green-50 text-green-600",
}

export default function StatusBadge({ status }: { status: Status }) {
  return (
    <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium ${styles[status]}`}>
      {status}
    </span>
  )
}
