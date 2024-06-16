import { UnspashTag } from "@/lib/interfaces/UnsplashImage"

export function formatTags(tags: UnspashTag[] | null) {
  if (!tags) return []

  const maxTags = 3

  return tags
    .filter((tag) => tag.type === "search")
    .map((tag) => ({
      id: crypto.randomUUID(),
      title: tag.title
    }))
    .splice(0, maxTags)
}
