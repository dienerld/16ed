import { ReactNode } from "react"
import { Paragraph, Span } from "./styles"

interface TextProps {
  spanContent?: string
  children: ReactNode
  color?: "primary" | "secondary" | "danger"
}

export function Typograph({children, spanContent, color}: TextProps) {
  return (
    <Paragraph color={color}>
      {children}
      <Span >{spanContent}</Span>
    </Paragraph>
  )
}
