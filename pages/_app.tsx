import "@/styles/globals.css"
import type { AppProps } from "next/app"
import { Provider } from "react-redux"
import { store } from "@/redux/store"
import { Inter } from "next/font/google"
import SearchTag from "@/components/SearchTag"

const inter = Inter({ subsets: ["latin"] })

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <main className={`flex min-h-dvh flex-col p-4 ${inter.className}`}>
        <SearchTag />
        <Component {...pageProps} />
      </main>
    </Provider>
  )
}
