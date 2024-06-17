import React from "react"
import { useAppDispatch } from "@/redux/hooks"
import { setTag } from "@/redux/features/imageSlice"
import Typography from "./ui/Typography"
import Button from "./ui/Button"
import Input from "./ui/Input"

export default function SearchTag() {
  const dispatch = useAppDispatch()

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
        <Input
          name="tag"
          type="text"
          placeholder="flags"
          minLength={3}
          required
        />
        <Button text="Search" />
      </form>
    </>
  )
}
