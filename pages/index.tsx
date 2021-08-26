import * as React from "react"
import type { NextPage } from "next"
import { Heading, HStack, Text, VStack } from "@/components"
import { htmlToMarkdown, ghostApi } from "@/lib"

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

// export async function getPosts() {
//   return await ghostApi.posts
//     .browse({
//       limit: "all",
//     })
//     .catch((err: any) => {
//       console.error(err)
//     })
// }

// export async function getStaticProps() {
//   const posts = (await getPosts()) || []
//   console.log("🚀 ~ file: index.tsx ~ line 45 ~ getStaticProps ~ posts", posts)
//   const parsed = posts.map((p: any) => htmlToMarkdown(p))

//   if (!posts) {
//     return {
//       notFound: true,
//     }
//   }

//   return {
//     props: { posts: parsed },
//   }
// }
