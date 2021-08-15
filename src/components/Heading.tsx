import * as React from "react"

const SIZES = {
  "1": "text-1 uppercase text-gray-g11",
  "2": "text-2 text-gray-g11",
  "3": "text-3 text-gray-g12",
  "4": "text-4 text-gray-g12",
  "5": "text-5 text-gray-g12",
  "6": "text-6 text-gray-g12",
  "7": "text-7 text-gray-g12",
  "8": "text-8 text-gray-g12",
}

type HeadingProps = {
  size?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6"
  className?: string
}

export const Heading: React.FC<HeadingProps> = ({
  size = 5,
  className = "",
  as: Tag = "h2",
  children,
}) => {
  const headingSize = SIZES[size]
  const classes = `${className} ${headingSize} font-bold`

  return <Tag className={classes}>{children}</Tag>
}
