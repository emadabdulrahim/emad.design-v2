/* eslint-disable react/display-name */
import * as React from "react"
import Markdown from "react-markdown"
import remarkSlug from "remark-slug"
import remarkAutolinkHeadings from "remark-autolink-headings"
import { Heading } from "./Heading"
import { Text } from "./Text"

const components = {
  h1: (props: any) => <Heading size={8} as='h1' {...props} />,
  h2: (props: any) => <Heading size={7} as='h2' {...props} />,
  h3: (props: any) => <Heading size={6} as='h3' {...props} />,
  h4: (props: any) => <Heading size={5} as='h4' {...props} />,
  h5: (props: any) => <Heading size={4} as='h5' {...props} />,
  h6: (props: any) => <Heading size={3} as='h6' {...props} />,
  p: Text,
}

type MarkdownRendererProps = {
  children: string
}

export const MarkdownRenderer = ({
  children,
}: MarkdownRendererProps): JSX.Element => {
  return (
    <Markdown
      components={components}
      plugins={[
        remarkSlug,
        [
          remarkAutolinkHeadings,
          {
            behavior: "wrap",
          },
        ],
      ]}
    >
      {children}
    </Markdown>
  )
}
