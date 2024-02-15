import styled from "styled-components";
import { colors } from "../../assets/colors";

interface ParagraphProps {
  color?: "primary" | "secondary" | "danger"
}

export const Paragraph = styled.p<ParagraphProps>`
  /* color: ${props => props.color === "primary" ? colors.primary : colors.secondary}; */
  color: ${({color = "primary"}) => colors[color]};
  font-size: 16px;
  font-weight: bold;
`
export const Span = styled.span`
  color: ${colors.primary};
  background-color: ${colors["gray-400"]};
  border-radius: 999px;
  padding: 2px 8px;
  color: white;
  margin-left: 16px;
`
