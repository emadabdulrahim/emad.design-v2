import * as React from "react"

export const VStack = ({
  children,
  space = "8",
  recursive = false,
  className = "",
}) => {
  const vstackType = recursive ? "vstack--recursive" : "vstack"

  return (
    <div
      className={`${vstackType} ${className}`}
      style={{ "--space": space } as React.CSSProperties}
    >
      {children}
    </div>
  )
}
