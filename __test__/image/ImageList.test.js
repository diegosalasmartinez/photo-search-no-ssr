import "@testing-library/jest-dom"
import { render, screen } from "@testing-library/react"
import ImageList from "../../components/image/ImageList"
import { images as imagesExample } from "../mock_data"

jest.mock("next/navigation", () => ({
  useRouter() {
    return {
      prefetch: () => null
    }
  }
}))

describe("ImageList", () => {
  it("render image articles", () => {
    render(<ImageList images={imagesExample} />)

    const images = screen.getAllByRole("article")

    expect(images).toHaveLength(imagesExample.length)
  })
})
