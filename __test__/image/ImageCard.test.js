import "@testing-library/jest-dom"
import { render, screen } from "@testing-library/react"
import ImageCard from "../../components/image/ImageCard"
import { image as imageExample } from "../mock_data"

jest.mock("next/navigation", () => ({
  useRouter() {
    return {
      prefetch: () => null
    }
  }
}))

describe("ImageCard", () => {
  it("render image alt", () => {
    render(<ImageCard image={imageExample} />)

    const image = screen.getByAltText(imageExample.alt_description)

    expect(image).toBeInTheDocument()
  })
})
