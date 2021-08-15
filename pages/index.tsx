import * as React from "react"
import type { NextPage } from "next"
import { Heading } from "@/components"

const Home: NextPage = () => {
  return (
    <main className='container mx-auto'>
      <Heading size={1}>Hello World</Heading>
      <Heading size={2}>Hello World</Heading>
      <Heading size={3}>Hello World</Heading>
      <Heading size={4}>Hello World</Heading>
      <Heading size={5}>Hello World</Heading>
      <Heading size={6}>Hello World</Heading>
      <Heading size={7}>Hello World</Heading>
      <Heading size={8}>Hello World</Heading>
    </main>
  )
}

export default Home
