import React from "react"
import { useRouter } from "next/navigation"
import Typography from "./ui/Typography"
import Button from "./ui/Button"
import Input from "./ui/Input"

export default function SearchTag() {
  const router = useRouter()

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const { elements } = event.currentTarget
    const tag = elements.namedItem("tag")
    const isInput = tag instanceof HTMLInputElement
    if (!isInput) return

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
