import React from "react"
import { useFetchImages } from "@/hooks/useFetchImages"
import Typography from "./ui/Typography"
import Button from "./ui/Button"
import Input from "./ui/Input"
import { useRouter } from "next/navigation"

export default function SearchTag() {
  const router = useRouter()
  const { setNewTag } = useFetchImages()

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const { elements } = event.currentTarget
    const tag = elements.namedItem("tag")
    const isInput = tag instanceof HTMLInputElement
    if (!isInput) return

    // setNewTag(tag.value)
    router.push(`/tag/${tag.value}`)

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
