import "@testing-library/jest-dom"
import { render, screen } from "@testing-library/react"
import ErrorAlert from "../../components/ui/ErrorAlert"

describe("ErrorAlert", () => {
  it("render error alert", () => {
    const errorText = "Error message"
    render(<ErrorAlert message={errorText} />)

    const errorAlert = screen.getByText(errorText)

    expect(errorAlert).toBeInTheDocument()
  })
})
