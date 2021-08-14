import * as React from "react"

export const Heading: React.FC<any> = ({
  size = "5",
  className = "",
  as: Tag = "h2",
  children,
}) => {
  return <Tag className={`text-${size} font-bold${className}`}>{children}</Tag>
}
