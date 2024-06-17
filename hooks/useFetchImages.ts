import { useAppDispatch } from "@/redux/hooks"
import { getImages, setTag } from "@/redux/features/imageSlice"

export const useFetchImages = () => {
  const dispatch = useAppDispatch()

  const setNewTag = (tag: string | null) => {
    dispatch(setTag(tag))
    dispatch(getImages({ tag, page: 1 }))
  }

  return { setNewTag }
}
