import Image from "next/image"
import { UnsplashImage } from "@/lib/interfaces/UnsplashImage"
import ImageData from "./ImageData"
import ImageTags from "./ImageTags"

export default function ImageCard({ image }: { image: UnsplashImage }) {
  const height = 400 * (image.height / image.width)

  return (
    <article className="relative w-fit">
      <Image
        src={image.urls.small}
        alt={image.alt_description ?? image.description}
        width={400}
        height={height}
        className="rounded-md"
        style={{
          aspectRatio: `400 / ${height}`
        }}
      />
      <div className="absolute bottom-0 left-0 right-0">
        <div className="bg-black/60 px-2 py-3 w-full flex gap-4 justify-between items-center">
          <ImageData image={image} />
          <ImageTags tags={image.tags} />
        </div>
      </div>
    </article>
  )
}
