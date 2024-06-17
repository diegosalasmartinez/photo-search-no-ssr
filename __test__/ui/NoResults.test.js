import "@testing-library/jest-dom"
import { render, screen } from "@testing-library/react"
import NoResults from "../../components/ui/NoResults"

describe("NoResults", () => {
  it("render error alert", () => {
    const errorText = "No results"
    render(<NoResults message={errorText} />)

    const noResults = screen.getByText(errorText)

    expect(noResults).toBeInTheDocument()
  })
})
