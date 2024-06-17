interface InputProps {
  name: string
  type: string
  placeholder: string
  required: boolean
  minLength?: number
}

export default function Input({
  name,
  type,
  placeholder,
  required,
  minLength = 3
}: InputProps) {
  return (
    <input
      className="shadow appearance-none rounded-md w-[300px] border-[1px] bg-white text-gray-500 border-gray-300 p-2 text-sm leading-tight focus:outline-none focus:shadow-outline"
      name={name}
      type={type}
      placeholder={placeholder}
      required={required}
      minLength={minLength}
    />
  )
}
