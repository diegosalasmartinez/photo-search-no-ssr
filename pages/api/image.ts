import type { NextApiRequest, NextApiResponse } from "next"

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const count = 30
  const apiKey = process.env.UNSPLASH_API_KEY || ""

  const response = await fetch(
    `https://api.unsplash.com/photos/random?count=${count}&client_id=${apiKey}`
  )
  const data = await response.json()

  res.status(200).json({ data })
}
