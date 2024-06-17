import { useEffect } from "react"
import { useFetchImages } from "@/hooks/useFetchImages"
import TagResults from "@/components/TagResults"

export default function Home() {
  const { setNewTag } = useFetchImages()

  useEffect(() => {
    setNewTag(null)
  }, [])

  return <TagResults />
}
