import { UnsplashImage } from "@/lib/interfaces/UnsplashImage"

export const fetchImages = async (page = 1) => {
  const response = await fetch(`/api/image?page=${page}`, {
    method: "GET",
    headers: { "Content-Type": "application/json" }
  })
  const result = await response.json()

  return result.data as UnsplashImage[]
}
