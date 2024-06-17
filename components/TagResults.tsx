import { useFetchImages } from "@/hooks/useFetchImages"
import ImageList from "./image/ImageList"
import Typography from "./ui/Typography"
import ErrorAlert from "./ui/ErrorAlert"
import Loader from "./ui/Loader"

export default function TagResults() {
  const { tag, status, images } = useFetchImages()
  const title = tag ? "Results" : "Trending Photos Rigth Now"

  return (
    <section className="mt-4">
      {status === "failed" ? (
        <ErrorAlert />
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
