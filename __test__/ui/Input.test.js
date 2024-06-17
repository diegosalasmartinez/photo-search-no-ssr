import "@testing-library/jest-dom"
import { render, screen } from "@testing-library/react"
import Input from "../../components/ui/Input"

describe("Input", () => {
  const name = "username"
  const type = "text"
  const placeholder = "Enter your username"
  const required = true
  const minLength = 5

  it("render input", () => {
    render(
      <Input
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
        minLength={minLength}
      />
    )

    const input = screen.getByPlaceholderText(placeholder);

    expect(input).toBeInTheDocument();
    expect(input).toHaveAttribute('name', name);
    expect(input).toHaveAttribute('type', type);
    expect(input).toHaveAttribute('required');
    expect(input).toHaveAttribute('minLength', minLength.toString());
  })
})
