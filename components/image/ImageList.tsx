import { UnsplashImage } from "@/lib/interfaces/UnsplashImage"
import ImageCard from "./ImageCard"

interface ImageListProp {
  images: UnsplashImage[]
}

export default function ImageList({ images }: ImageListProp) {
  return (
    <div className="mt-2 flex flex-col gap-4">
      {images.map((image) => (
        <ImageCard key={image.id} image={image} />
      ))}
    </div>
  )
}
