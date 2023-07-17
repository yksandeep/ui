import { commonStyles } from "@/src/shared";
import styled from "styled-components";

export type TCheckboxLabelSize = "small" | "medium" | "large";

export interface ICustomCheckboxLabel {
  background?: string;
  fullBackground?: boolean;
  square?: boolean;
  size?: TCheckboxLabelSize;
}

function getFontSize(size: TCheckboxLabelSize | undefined) {
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

export const CustomCheckboxLabel = styled.label<ICustomCheckboxLabel>`
  display: flex;
  align-items: center;
  gap: ${commonStyles.gap};
  position: relative;
  cursor: pointer;
  font-size: ${(props) =>
    `calc(${getFontSize(props.size)} * ${commonStyles.textBodyFont})`};
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  margin: 0px;
  width: max-content;

  /* Hide the browser's default checkbox button */
  input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
  }
  /* Create a custom checkbox button */
  span {
    border-radius: ${commonStyles.borderRadius};
    position: relative;
    top: 0;
    left: 0;
    height: ${(props) =>
      props.size === "large"
        ? commonStyles.large_px
        : props.size === "medium"
        ? `calc(${commonStyles.medium} * ${commonStyles.large_px})`
        : `calc(${commonStyles.small} * ${commonStyles.large_px})`};
    width: ${(props) =>
      props.size === "large"
        ? commonStyles.large_px
        : props.size === "medium"
        ? `calc(${commonStyles.medium} * ${commonStyles.large_px})`
        : `calc(${commonStyles.small} * ${commonStyles.large_px})`};
    background-color: ${commonStyles.disabled};
    /* Create the indicator (the checkmark - hidden when not checked) */
    &:after {
      content: "";
      position: absolute;
      display: none;
      /* Style the indicator (checkmark) */
      left: ${(props) =>
        props.size === "small"
          ? `calc(${commonStyles.small} * 9px)`
          : props.size === "medium"
          ? `calc(${commonStyles.medium} * 9px)`
          : "9px"};
      top: ${(props) =>
        props.size === "small"
          ? `calc(${commonStyles.small} * 5px)`
          : props.size === "medium"
          ? `calc(${commonStyles.medium} * 5px)`
          : "5px"};
      width: ${(props) =>
        props.size === "large"
          ? "5px"
          : props.size === "medium"
          ? `calc(${commonStyles.medium} * 4px)`
          : `calc(${commonStyles.small} * 4px)`};
      height: ${(props) =>
        props.size === "large"
          ? "10px"
          : props.size === "medium"
          ? `calc(${commonStyles.medium} * 9px)`
          : `calc(${commonStyles.small} * 9px)`};
      border: solid white;
      border-width: ${(props) =>
        props.size === "small"
          ? "0 2px 2px 0"
          : props.size === "medium"
          ? "0 2.5px 2.5px 0"
          : "0 3px 3px 0"};
      -webkit-transform: rotate(45deg);
      -ms-transform: rotate(45deg);
      transform: rotate(45deg);
    }
  }

  /* On mouse-over, add a grey background color */
  &:hover input ~ span {
    background-color: ${commonStyles.hover};
  }

  /* When the radio button is checked, add background */
  input:checked ~ span {
    background-color: ${(props) =>
      props.background ? props.background : commonStyles.primary};
  }
  /* Show the indicator (dot/circle) when checked */
  input:checked ~ span:after {
    display: block;
  }
`;
