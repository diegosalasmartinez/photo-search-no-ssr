import {
  selectImageSelected,
  setImageSelected,
  setNextImageSelected,
  setPrevImageSelected
} from "@/redux/features/imageSlice"
import { useAppDispatch, useAppSelector } from "@/redux/hooks"
import { useEffect } from "react"

export const useImageModal = () => {
  const dispatch = useAppDispatch()
  const selectedImageIndex = useAppSelector(selectImageSelected)

  useEffect(() => {
    if (selectedImageIndex == null) {
      document.body.classList.remove("overflow-hidden")
    } else {
      document.body.classList.add("overflow-hidden")
    }
  }, [selectedImageIndex])

  const closeModal = () => {
    dispatch(setImageSelected(null))
    const elementId = `image-card-${selectedImageIndex}`
    const imageCardElement = document.getElementById(elementId)
    if (imageCardElement) {
      imageCardElement.scrollIntoView({ behavior: "smooth" })
    }
  }

  const handleNextImage = () => {
    dispatch(setNextImageSelected())
  }

  const handlePreviousImage = () => {
    dispatch(setPrevImageSelected())
  }

  return {
    closeModal,
    handleNextImage,
    handlePreviousImage
  }
}
