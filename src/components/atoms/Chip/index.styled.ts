import { commonStyles } from "@/src/shared";
import styled from "styled-components";

export function getFontSize(size: "small" | "medium" | "large" | undefined) {
  switch (size) {
    case "large":
      return commonStyles.large + 0.2; //magic number
    case "medium":
      return commonStyles.medium + 0.2; //magic number
    case "small":
      return commonStyles.small + 0.2; //magic number
    default:
      return commonStyles.large + 0.2; //magic number
  }
}

export interface IStyledChip {
  background?: string;
  borderRadius?: string;
  size?: "small" | "medium" | "large";
}

export const StyledChip = styled.p<IStyledChip>`
  font-size: ${(props) =>
    `calc(${getFontSize(props.size)} * ${commonStyles.textBodyFont})`};
  background-color: ${(props) => props.background || commonStyles.disabled};
  padding: 5px 7px;
  border-radius: ${(props) => props.borderRadius || "8px"};
  max-width: max-content;
  display: flex;
  gap: 2px;
  align-items: center;
  margin: 0;
  span {
    cursor: ${(props) => (props.onClick ? "pointer" : "default")};
  }
  svg {
    width: ${(props) =>
      `calc(${getFontSize(props.size)} * ${commonStyles.textBodyFont})`};
    height: ${(props) =>
      `calc(${getFontSize(props.size)} * ${commonStyles.textBodyFont})`};
  }
`;
