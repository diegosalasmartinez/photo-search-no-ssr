import SearchTag from "@/components/SearchTag"
import TagResults from "@/components/TagResults"
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })

export default function Home() {
  return (
    <main className={`flex min-h-dvh flex-col p-4 ${inter.className}`}>
      <SearchTag />
      <TagResults />
    </main>
  )
}
