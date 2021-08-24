import { unified } from "unified"
import parse from "rehype-parse"
import rehype2remark from "rehype-remark"
import stringify from "remark-stringify"
import sanitize from "rehype-sanitize"

export const htmlToMarkdown = (post: any) => {
  return unified()
    .use(parse)
    .use(sanitize)
    .use(rehype2remark)
    .use(stringify)
    .processSync(post.html)
    .toString()
}
