import type { NextApiRequest, NextApiResponse } from "next"
import { UnsplashImageList } from "@/lib/interfaces/UnsplashImage"

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const count = 30
  const baseUrl = "https://api.unsplash.com"
  const apiKey = process.env.UNSPLASH_API_KEY || ""
  const tag = req.query.tag as string
  const page = req.query.page as string

  if (tag) {
    const queryParams = `query=${tag}&page=${page}&per_page=${count}&client_id=${apiKey}`
    const response = await fetch(`${baseUrl}/search/photos?${queryParams}`)
    const data = (await response.json()) as UnsplashImageList

    res.status(200).json({ data: data.results })
  } else {
    const queryParams = `page=${page}&count=${count}&client_id=${apiKey}`
    const response = await fetch(`${baseUrl}/photos/random?${queryParams}`)
    const data = await response.json()

    res.status(200).json({ data })
  }
}
