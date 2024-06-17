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
    const notFoundMessage = "No images found"

    render(<ImageList images={imagesExample} showResults={true} />)

    const images = screen.getAllByRole("article")
    const notResult = screen.queryByText(notFoundMessage)

    expect(images).toHaveLength(imagesExample.length)
    expect(notResult).not.toBeInTheDocument()
  })

  it("render no images found", () => {
    const notFoundMessage = "No images found"

    render(<ImageList images={[]} showResults={true} />)

    const images = screen.queryAllByRole("article")
    const notResult = screen.getByText(notFoundMessage)

    expect(images).toHaveLength(0)
    expect(notResult).toBeInTheDocument()
  })
})
