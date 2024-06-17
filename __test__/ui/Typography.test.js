import "@testing-library/jest-dom"
import { render, screen } from "@testing-library/react"
import Typography from "../../components/ui/Typography"

describe("Typography", () => {
  it("render typography", () => {
    const text = "Error message"
    render(<Typography text={text} />)

    const typography = screen.getByText(text)

    expect(typography).toBeInTheDocument()
  })
})
