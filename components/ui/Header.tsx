import Link from "next/link"

export default function Header() {
  return (
    <header className="w-full bg-stone-900 flex items-center gap-2 leading-3 p-4">
      <Link
        href="/"
        className="text-2xl text-neutral-500 font-semibold uppercase"
      >
        Photo
        <span className="text-white">Search</span>
      </Link>
      <span className="text-neutral-500 text-xs">powered by Flickr</span>
    </header>
  )
}
