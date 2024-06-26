import { UnsplashImage } from "@/lib/interfaces/UnsplashImage"

export const fetchImages = async (tag: string | null, page = 1) => {
  const queryParams = `page=${page}` + (tag ? `&tag=${tag}` : "")

  const response = await fetch(`/api/image?${queryParams}`, {
    method: "GET",
    headers: { "Content-Type": "application/json" }
  })

  if (!response.ok) {
    const errorData = await response.json()
    throw new Error(errorData.error || "Failed to fetch images")
  }

  const result = await response.json()
  return result.data as UnsplashImage[]
}
