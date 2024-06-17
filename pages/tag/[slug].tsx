import { useEffect } from "react"
import { useRouter } from "next/router"
import TagResults from "@/components/TagResults"
import { useFetchImages } from "@/hooks/useFetchImages"

export default function TagPage() {
  const { setNewTag } = useFetchImages()
  const router = useRouter()
  const { slug } = router.query

  useEffect(() => {
    if (slug) {
      const tag = Array.isArray(slug) ? slug.join("/") : slug
      setNewTag(tag)
    }
  }, [slug])

  return <TagResults />
}
