import { useAppSelector } from "@/redux/hooks"
import { useInfiniteScroll } from "@/hooks/useInfiniteScroll"
import {
  selectImages,
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
  const images = useAppSelector(selectImages)
  const status = useAppSelector(selectStatus)

  const title = tag ? "Results" : "Trending Photos Rigth Now"

  return (
    <section className="mt-4">
      {status === "failed" ? (
        <ErrorAlert message="Failed to load the images." />
      ) : (
        <>
          <Typography text={title} />
          <ImageList images={images} />
          {status === "loading" && <Loader />}
        </>
      )}
    </section>
  )
}
