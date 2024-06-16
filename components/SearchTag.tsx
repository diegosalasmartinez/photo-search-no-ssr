"use client"

// import { setQuery } from "@/store/features/tagSlice"
// import { useAppDispatch } from "@/store/hooks"
import { usePathname, useRouter, useSearchParams } from "next/navigation"
import React, { useEffect } from "react"
import Typography from "./ui/Typography"
import Button from "./ui/Button"
import Input from "./ui/Input"

export default function SearchTag() {
  const searchParams = useSearchParams()
  const pathname = usePathname()
  const { replace } = useRouter()
//   const dispatch = useAppDispatch()

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

    const params = new URLSearchParams(searchParams)
    params.set("tag", tag.value)
    replace(`${pathname}?${params.toString()}`)
    // dispatch(setQuery(tag.value))

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
