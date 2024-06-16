import { UnsplashImage } from "@/lib/interfaces/UnsplashImage"
import { formatDate } from "@/utils/date"

export default function ImageData({ image }: { image: UnsplashImage }) {
  return (
    <div className="flex-shrink-0 w-max">
      <p className="text-sm text-white mb-1">
        by <span className="font-bold">{image.user.name}</span>
      </p>
      <p className="text-xs text-white">Taken {formatDate(image.created_at)}</p>
    </div>
  )
}
