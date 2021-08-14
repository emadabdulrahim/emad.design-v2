import * as React from "react"
import type { NextPage } from "next"
import { Heading } from "@/components"

const Home: NextPage = () => {
  return (
    <main className='container mx-auto'>
      <Heading>Hello World</Heading>
    </main>
  )
}

export default Home
