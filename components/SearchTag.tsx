// import { setQuery } from "@/store/features/tagSlice"
// import { useAppDispatch } from "@/store/hooks"
import React from "react"
import Typography from "./ui/Typography"
import Button from "./ui/Button"
import Input from "./ui/Input"
import { useAppDispatch } from "@/redux/hooks"
import { setTag } from "@/redux/features/imageSlice"

export default function SearchTag() {
  const dispatch = useAppDispatch()

  //   useEffect(() => {
  //     const tag = searchParams.get("tag")
  //     if (tag) dispatch(setQuery(tag))
  //   }, [])

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const { elements } = event.currentTarget
    const tag = elements.namedItem("tag")
    const isInput = tag instanceof HTMLInputElement
    if (!isInput) return

    dispatch(setTag(tag.value))

    tag.value = ""
  }

  return (
    <>
      <Typography text="Search by tag" />
      <form className="flex gap-2 md:gap-4 text-base" onSubmit={handleSubmit}>
        <Input name="tag" type="text" placeholder="flags" required />
        <Button text="Search" />
      </form>
    </>
  )
}
