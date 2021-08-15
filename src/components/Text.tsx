import * as React from "react"

const SIZES = {
  "1": "text-3 text-text-body dark:text-text-darkBody",
  "2": "text-4 text-text-body dark:text-text-darkBody tracking-body",
  "3": "text-5 text-text-body dark:text-text-darkBody tracking-heading",
}

type TextProps = {
  size?: 1 | 2 | 3
  as?: "p" | "span"
  className?: string
}

export const Text: React.FC<TextProps> = ({
  size = 2,
  className = "",
  as: Tag = "p",
  children,
}) => {
  const textSizes = SIZES[size]
  const classes = `${className} ${textSizes} font-regular`

  return <Tag className={classes}>{children}</Tag>
}
