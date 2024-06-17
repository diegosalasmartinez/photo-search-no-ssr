import "@testing-library/jest-dom"
import { render, screen } from "@testing-library/react"
import ImageData from "../../components/image/ImageData"
import { formatDate } from "../../utils/date"
import { image as imageExample } from "../mock_data"

describe("ImageDate", () => {
  it("render user name", () => {
    render(<ImageData image={imageExample} />)

    const authorName = screen.getByText(imageExample.user.name)

    expect(authorName).toBeInTheDocument()
  })

  it("render date", () => {
    render(<ImageData image={imageExample} />)

    const date = screen.getByText(`Taken ${formatDate(imageExample.created_at)}`)

    expect(date).toBeInTheDocument()
  })
})
