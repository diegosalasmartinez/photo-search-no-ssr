import "@testing-library/jest-dom"
import { render, screen } from "@testing-library/react"
import Button from "../../components/ui/Button"

describe("Button", () => {
  it("render button", () => {
    const buttonText = "Button test"
    render(<Button text={buttonText} />)

    const button = screen.getByText(buttonText)

    expect(button).toBeInTheDocument()
  })
})
