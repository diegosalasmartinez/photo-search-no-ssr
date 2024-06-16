import { useFetchImages } from "@/hooks/useFetchImages"
import ImageList from "./image/ImageList"
import Typography from "./ui/Typography"
import Loader from "./ui/Loader"

export default function TagResults() {
  const { tag, status, images } = useFetchImages()
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
