import { UnsplashImage } from "@/lib/interfaces/UnsplashImage"
import NoResults from "../ui/NoResults"
import ImageCard from "./ImageCard"

interface ImageListProp {
  images: UnsplashImage[]
  showResults: boolean
}

export default function ImageList({ images, showResults }: ImageListProp) {
  return (
    <div className="mt-2 flex flex-col gap-4">
      {showResults && images.length === 0 && (
        <NoResults message="No images found" />
      )}
      {images.map((image) => (
        <ImageCard key={image.id} image={image} />
      ))}
    </div>
  )
}
