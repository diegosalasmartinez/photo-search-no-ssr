import { UnspashTag } from "@/lib/interfaces/UnsplashImage"
import { v4 as uuidv4 } from "uuid"

export function formatTags(tags: UnspashTag[] | null) {
  if (!tags) return []

  const maxTags = 3

  return tags
    .filter((tag) => tag.type === "search")
    .map((tag) => ({
      id: uuidv4(),
      title: tag.title
    }))
    .splice(0, maxTags)
}
