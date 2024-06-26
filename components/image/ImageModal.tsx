import { selectImages, selectImageSelected } from "@/redux/features/imageSlice"
import { useImageModal } from "@/hooks/useImageModal"
import { useAppSelector } from "@/redux/hooks"
import ImageCard from "./ImageCard"
import ChevronLeft from "../svg/ChevronLeft"
import ChevronRight from "../svg/ChevronRight"
import Close from "../svg/Close"

export default function ImageModal() {
  const { handleNextImage, handlePreviousImage, closeModal } = useImageModal()
  const selectedImageIndex = useAppSelector(selectImageSelected)
  const images = useAppSelector(selectImages)
  if (selectedImageIndex == null) return null

  const canGoBack = selectedImageIndex > 0
  const canGoForward = selectedImageIndex < images.length - 1
  const currentImage = images[selectedImageIndex]
  if (!currentImage) return null

  return (
    <div className="bg-black fixed left-0 bottom-0 right-0 top-0 z-50">
      <div className="w-full flex justify-end">
        <button className="text-white p-4" onClick={closeModal}>
          <Close />
        </button>
      </div>
      <div className="flex justify-center items-center h-dvh">
        <button
          className={`text-white mr-4 ${canGoBack ? "" : "opacity-0"}`}
          disabled={!canGoBack}
          onClick={handlePreviousImage}
        >
          <ChevronLeft />
        </button>
        <ImageCard image={currentImage} />
        <button
          className={`text-white ml-4 ${canGoForward ? "" : "opacity-0"}`}
          disabled={!canGoForward}
          onClick={handleNextImage}
        >
          <ChevronRight />
        </button>
      </div>
    </div>
  )
}
