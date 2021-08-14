import type { AppProps } from "next/app"
import { StaticResourcesHead } from "@/components"
import "../styles/globals.css"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <StaticResourcesHead />
      <Component {...pageProps} />
    </>
  )
}
export default MyApp
