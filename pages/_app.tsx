import "@/styles/globals.css"
import type { AppProps } from "next/app"
import { Provider } from "react-redux"
import { store } from "@/redux/store"
import { Inter } from "next/font/google"
import SearchTag from "@/components/SearchTag"
import Head from "next/head"

const inter = Inter({ subsets: ["latin"] })

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <main className={`flex min-h-dvh flex-col p-4 ${inter.className}`}>
        <Head>
          <title>Photo Search</title>
        </Head>
        <SearchTag />
        <Component {...pageProps} />
      </main>
    </Provider>
  )
}
