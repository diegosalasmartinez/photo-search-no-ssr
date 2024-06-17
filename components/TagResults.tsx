import { useAppSelector } from "@/redux/hooks"
import { useInfiniteScroll } from "@/hooks/useInfiniteScroll"
import {
  selectImages,
  selectShowResults,
  selectStatus,
  selectTag
} from "@/redux/features/imageSlice"
import ImageList from "./image/ImageList"
import Typography from "./ui/Typography"
import ErrorAlert from "./ui/ErrorAlert"
import Loader from "./ui/Loader"

export default function TagResults() {
  useInfiniteScroll()
  const tag = useAppSelector(selectTag)
  const showResults = useAppSelector(selectShowResults)
  const images = useAppSelector(selectImages)
  const status = useAppSelector(selectStatus)

  const title = tag ? "Results" : "Trending Photos Rigth Now"

  if (status === "failed") {
    return (
      <section className="mt-4">
        <ErrorAlert message="Failed to load the images." />
      </section>
    )
  }

  return (
    <section className="mt-4">
      <Typography text={title} />
      <ImageList images={images} showResults={showResults} />
      {status === "loading" && <Loader />}
    </section>
  )
}
