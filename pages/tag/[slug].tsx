import TagResults from "@/components/TagResults"
import { setTag } from "@/redux/features/imageSlice"
import { useAppDispatch } from "@/redux/hooks"
import { useRouter } from "next/router"
import { useEffect } from "react"

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

  return <TagResults />
}
