import { useEffect } from "react"
import { useAppDispatch, useAppSelector } from "@/redux/hooks"
import {
  clearImages,
  getImages,
  incrementPage,
  selectImages,
  selectPage,
  selectStatus,
  selectTag
} from "@/redux/features/imageSlice"

export const useFetchImages = () => {
  const dispatch = useAppDispatch()
  const tag = useAppSelector(selectTag)
  const images = useAppSelector(selectImages)
  const status = useAppSelector(selectStatus)
  const page = useAppSelector(selectPage)

  useEffect(() => {
    if (status === "idle") {
      dispatch(getImages({ tag, page: 1 }))
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
    if (tag != null) {
      dispatch(getImages({ tag, page: 1 }))
    }
  }, [tag, dispatch])

  useEffect(() => {
    if (page > 1) {
      dispatch(getImages({ tag, page }))
    }
  }, [page, dispatch])

  return { tag, status, images }
}
