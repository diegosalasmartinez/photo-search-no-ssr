import { parseISO, format } from "date-fns"

export function formatDate(dateString: string) {
  const date = parseISO(dateString)

  return format(date, "MMM d, yyyy")
}
