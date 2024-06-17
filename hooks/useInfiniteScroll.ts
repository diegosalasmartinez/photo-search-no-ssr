import { useEffect } from "react"
import { useAppDispatch, useAppSelector } from "@/redux/hooks"
import {
  getImages,
  incrementPage,
  selectPage,
  selectStatus,
  selectTag
} from "@/redux/features/imageSlice"

export const useInfiniteScroll = () => {
  const dispatch = useAppDispatch()
  const status = useAppSelector(selectStatus)
  const page = useAppSelector(selectPage)
  const tag = useAppSelector(selectTag)

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
      dispatch(getImages({ tag, page }))
    }
  }, [page, dispatch])

  return {}
}
