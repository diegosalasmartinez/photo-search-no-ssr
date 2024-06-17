import "@testing-library/jest-dom"
import { render, screen } from "@testing-library/react"
import Loader from "../../components/ui/Loader"

describe("Loader", () => {
  it("render loader spinner", () => {
    render(<Loader />)

    const loader = screen.getByRole("img")

    expect(loader).toHaveClass("animate-spin")
    expect(loader).toHaveAttribute("xmlns", "http://www.w3.org/2000/svg")
    expect(loader).toHaveAttribute("fill", "none")
    expect(loader).toHaveAttribute("viewBox", "0 0 24 24")
  })
})
