import { commonStyles } from "@/src/shared";
import styled from "styled-components";

export type TCustomRadioLabelSize = "small" | "medium" | "large";

export interface ICustomRadioLabel {
  background?: string;
  fullBackground?: boolean;
  square?: boolean;
  size?: TCustomRadioLabelSize;
}

function getFontSize(size: TCustomRadioLabelSize | undefined) {
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

export const CustomRadioLabel = styled.label<ICustomRadioLabel>`
  display: flex;
  align-items: center;
  gap: ${commonStyles.gap};
  margin-bottom: 12px;
  cursor: pointer;
  font-size: ${(props) =>
    `calc(${getFontSize(props.size)} * ${commonStyles.textBodyFont})`};
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  margin: 0px;
  width: max-content;

  /* Hide the browser's default radio button */
  input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
  }
  /* Create a custom radio button */
  span {
    border-radius: ${(props) => (props.square ? "25%" : "50%")};
    display: inline-block;
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
    /* Create the indicator (the dot/circle - hidden when not checked) */
    &:after {
      content: "";
      position: relative;
      display: block;
      /* Style the indicator (dot/circle) */
      top: ${(props) =>
        props.size === "small"
          ? `calc(${commonStyles.small} * 9px)`
          : props.size === "medium"
          ? `calc(${commonStyles.medium} * 9px)`
          : "9px"};
      left: ${(props) =>
        props.size === "small"
          ? `calc(${commonStyles.small} * 9px)`
          : props.size === "medium"
          ? `calc(${commonStyles.medium} * 9px)`
          : "9px"};
      width: ${(props) =>
        props.size === "large"
          ? "8px"
          : props.size === "medium"
          ? `calc(${commonStyles.medium} * 8px)`
          : `calc(${commonStyles.small} * 8px)`};
      height: ${(props) =>
        props.size === "large"
          ? "8px"
          : props.size === "medium"
          ? `calc(${commonStyles.medium} * 8px)`
          : `calc(${commonStyles.small} * 8px)`};
      border-radius: 50%;
      /* border-radius: ${(props) => (props.square ? "25%" : "50%")}; */
      background: ${(props) =>
        props.fullBackground ? props.background : "#fff"};
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
