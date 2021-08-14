import * as React from "react"
import Head from "next/head"

export const StaticResourcesHead = () => (
  <Head>
    <link
      rel='preload'
      href='/fonts/ar-gr-bold.woff2'
      as='font'
      crossOrigin=''
    />
    <link
      rel='preload'
      href='/fonts/ar-gr-regular.woff2'
      as='font'
      crossOrigin=''
    />
  </Head>
)
