interface ButtonProps {
  text: string
}

export default function Button({ text }: ButtonProps) {
  return (
    <button className="rounded-md bg-sky-600 p-2 text-white text-sm hover:bg-sky-800 transition-all duration-200">
      {text}
    </button>
  )
}
