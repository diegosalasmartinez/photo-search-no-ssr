import { useEffect } from "react"
import { useAppDispatch, useAppSelector } from "@/redux/hooks"
import {
  getImages,
  incrementPage,
  selectPage,
  selectStatus
} from "@/redux/features/imageSlice"

export const useImages = () => {
  const dispatch = useAppDispatch()
  const status = useAppSelector(selectStatus)
  const page = useAppSelector(selectPage)

  useEffect(() => {
    if (status === "idle") {
      dispatch(getImages(1))
    }
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        if (status !== "loading") {
          dispatch(incrementPage())
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [status, dispatch])

  useEffect(() => {
    if (page > 1) {
      dispatch(getImages(page))
    }
  }, [page, dispatch])

  return {}
}
