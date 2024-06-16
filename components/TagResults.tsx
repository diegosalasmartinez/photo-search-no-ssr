import { useAppSelector } from "@/redux/hooks"
import { useImages } from "@/hooks/useImages"
import {
  selectImages,
  selectStatus,
  selectTag
} from "@/redux/features/imageSlice"
import Typography from "./ui/Typography"
import Loader from "./ui/Loader"
import ImageList from "./image/ImageList"

export default function TagResults() {
  useImages()
  const tag = useAppSelector(selectTag)
  const status = useAppSelector(selectStatus)
  const images = useAppSelector(selectImages)
  const title = tag ? "Results" : "Trending Photos Rigth Now"

  if (status === "failed") {
    return <p>Failed to load images</p>
  }

  return (
    <section className="mt-4">
      <Typography text={title} />
      <ImageList images={images} />
      {status === "loading" && <Loader />}
    </section>
  )
}
