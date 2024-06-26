import "@testing-library/jest-dom"
import { render, screen } from "@testing-library/react"
import ImageTags from "../../components/image/ImageTags"
import { image as imageExample } from "../mock_data"

jest.mock("next/navigation", () => ({
  useRouter() {
    return {
      prefetch: () => null
    }
  }
}))

describe("ImageTags", () => {
  it("render tags", () => {
    render(<ImageTags tags={imageExample.tags} />)

    const tags = screen.getAllByRole("button")

    expect(tags).toHaveLength(imageExample.tags.length)
  })

  it("render 3 tags max", () => {
    render(<ImageTags tags={imageExample.tags} />)

    const tags = screen.getAllByRole("button")

    expect(tags.length <= 3).toBe(true)
  })
})
