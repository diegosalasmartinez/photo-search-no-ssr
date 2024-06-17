import "@testing-library/jest-dom"
import { render, screen } from "@testing-library/react"
import Header from "../../components/ui/Header"

describe("Header", () => {
  it("render header", () => {
    const textBold = 'Photo'
    const textLight = 'Search'

    render(<Header />)

    const headerBold = screen.getByText(textBold)
    const headerLight = screen.getByText(textLight)

    expect(headerBold).toBeInTheDocument()
    expect(headerLight).toBeInTheDocument()
  })
})
