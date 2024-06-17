import "@/styles/globals.css"
import type { AppProps } from "next/app"
import { Provider } from "react-redux"
import { store } from "@/redux/store"
import { Inter } from "next/font/google"
import SearchTag from "@/components/SearchTag"
import Head from "next/head"
import Header from "@/components/ui/Header"

const inter = Inter({ subsets: ["latin"] })

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Head>
        <title>Photo Search</title>
      </Head>
      <Header />
      <main className={`flex min-h-dvh flex-col p-4 ${inter.className}`}>
        <SearchTag />
        <Component {...pageProps} />
      </main>
    </Provider>
  )
}
