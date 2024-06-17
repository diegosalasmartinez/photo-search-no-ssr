interface TypographyProps {
  text: string
}

export default function Typography({ text }: TypographyProps) {
  return <h2 className="font-bold text-stone-900 text-lg mb-1">{text}</h2>
}
