import * as React from "react"

type VStackProps = {
  space?: string
  recursive?: boolean
  className?: string
}

export const VStack: React.FC<VStackProps> = ({
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
