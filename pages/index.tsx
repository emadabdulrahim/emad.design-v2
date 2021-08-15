import * as React from "react"
import type { NextPage } from "next"
import { Heading, HStack, Text, VStack } from "@/components"

const Home: NextPage = () => {
  return (
    <div className='dark'>
      <main className='flex min-h-screen mx-auto dark bg-bg-tint1 dark:bg-bg-darkTint1'>
        <VStack space='2rem' className='max-w-3xl px-4 py-20 mx-auto'>
          <Heading size={8}>Hello, I’m Emad</Heading>
          <Text size={3}>
            I’m a Product Designer and Frontend Developer based in San
            Francisco. I specialize in user experience design, visual design,
            interaction design, and building products that are joyful to use.
          </Text>
          <Text size={3}>
            Currently building{" "}
            <a href='//duskk.com' className='text-blue-b8'>
              Duskk
            </a>{" "}
            — A journal for ambitious individuals.
          </Text>
        </VStack>
      </main>
    </div>
  )
}

export default Home
