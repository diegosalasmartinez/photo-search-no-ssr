import "@/styles/globals.css"
import { store } from "@/redux/store"
import { Provider } from "react-redux"
import type { AppProps } from "next/app"
import Head from "next/head"
import { Inter } from "next/font/google"
import ImageModal from "@/components/image/ImageModal"
import SearchTag from "@/components/SearchTag"
import Header from "@/components/ui/Header"

const inter = Inter({ subsets: ["latin"] })

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Head>
        <title>Photo Search</title>
      </Head>
      <main className={`relative ${inter.className}`}>
        <Header />
        <ImageModal />
        <div className={`flex min-h-dvh flex-col p-4 overflow-hidden`}>
          <SearchTag />
          <Component {...pageProps} />
        </div>
      </main>
    </Provider>
  )
}
