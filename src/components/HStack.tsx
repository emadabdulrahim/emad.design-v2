import * as React from "react"
import cx from "classnames"

type HStackProps = {
  className?: string
}

export const HStack: React.FC<HStackProps> = ({ children, className }) => {
  return <div className={`flex ${className}`}>{children}</div>
}
