import SearchTag from "@/components/SearchTag"
import TagResults from "@/components/TagResults"
import { setTag } from "@/redux/features/imageSlice"
import { useAppDispatch } from "@/redux/hooks"
import { Inter } from "next/font/google"
import { useRouter } from "next/router"
import { useEffect } from "react"

const inter = Inter({ subsets: ["latin"] })

export default function TagPage() {
  const dispatch = useAppDispatch()
  const router = useRouter()
  const { slug } = router.query

  useEffect(() => {
    if (slug) {
      const tag = Array.isArray(slug) ? slug.join("/") : slug
      dispatch(setTag(tag))
    }
  }, [slug])

  return (
    <main className={`flex min-h-dvh flex-col p-4 ${inter.className}`}>
      <p>Post: {router.query.slug}</p>
      <SearchTag />
      <TagResults />
    </main>
  )
}
