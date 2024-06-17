import "@testing-library/jest-dom"
import { render, screen } from "@testing-library/react"
import ImageData from "../components/image/ImageData"
import { formatDate } from "../utils/date"
import { image } from "./mock_data"

describe("ImageDate", () => {
  it("render user name", () => {
    render(<ImageData image={image} />)

    const authorName = screen.getByText(image.user.name)

    expect(authorName).toBeInTheDocument()
  })

  it("render date", () => {
    render(<ImageData image={image} />)

    const date = screen.getByText(`Taken ${formatDate(image.created_at)}`)

    expect(date).toBeInTheDocument()
  })
})
