import { commonStyles } from "@/shared/utils";
import styled from "styled-components";

export const Card = styled.div`
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: ${commonStyles.borderRadius};
`;

const CLink = Card.withComponent("a");

export const CardLink = styled(CLink)`
  display: block;

  &:hover {
    border-color: slategray;
  }
`;

export interface IStyledButton {
  btnBgcolorhover?: string;
  btntxtcolorhover?: string;
  fontColor?: string;
}

export interface IInstructionsModal {
  backgroundColor?: string;
  fontColor?: string;
}

export const InstructionsModal = styled.div<IInstructionsModal>`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  display: none;
  max-width: 350px;
  min-width: 350px;
  min-height: 50px;
  background: ${(props) => props.backgroundColor || commonStyles.background};
  align-content: center;
  position: absolute;
  box-shadow: ${commonStyles.boxShadow};
  z-index: 99999999999;
  font-family: "Raleway", sans-serif;
  border-radius: ${commonStyles.borderRadius};

  .hide {
    display: none;
  }

  .triangle-up {
    width: 20px;
    height: 20px;
    margin: auto;
    position: absolute;
    overflow: hidden;
    &:before {
      content: "";
      width: 20px;
      height: 20px;
      background: ${(props) =>
        props.backgroundColor || commonStyles.background};
      box-shadow: ${commonStyles.boxShadow};
      transform: rotate(45deg);
      position: absolute;
      top: 6px;
    }
  }
  .triangle-right {
    width: 20px;
    height: 20px;
    margin: auto;
    position: absolute;
    overflow: hidden;
    left: 100%;
    &:after {
      content: "";
      width: 20px;
      height: 20px;
      background: ${(props) =>
        props.backgroundColor || commonStyles.background};
      box-shadow: ${commonStyles.boxShadow};
      transform: rotate(45deg);
      position: absolute;
      right: 20px;
      margin: auto;
    }
  }

  .triangle-left {
    width: 20px;
    height: 20px;
    margin: auto;
    position: absolute;
    overflow: hidden;
    right: 100%;
    &:after {
      content: "";
      width: 20px;
      height: 20px;
      background: ${(props) =>
        props.backgroundColor || commonStyles.background};
      box-shadow: ${commonStyles.boxShadow};
      transform: rotate(45deg);
      position: absolute;
      left: 20px;
      margin: auto;
    }
  }

  .triangle-down {
    width: 20px;
    height: 20px;
    margin: auto;
    position: absolute;
    overflow: hidden;
    &:after {
      content: "";
      width: 20px;
      height: 20px;
      background: ${(props) =>
        props.backgroundColor || commonStyles.background};
      box-shadow: ${commonStyles.boxShadow};
      transform: rotate(45deg);
      position: absolute;
      bottom: 6px;
    }
  }
`;

export const StyledNextButton = styled("button")<IStyledButton>`
  border: none;
  background: transparent;
  border-radius: ${commonStyles.borderRadius};
  /* background: blue; */
  color: ${(props) => props.fontColor || commonStyles.textBody} !important;
  &:hover,
  :active {
    background-color: ${(props) =>
      props.btnBgcolorhover || commonStyles.primary};
    color: ${(props) =>
      props.btntxtcolorhover || commonStyles.background} !important;
  }
`;
export const StyledBackButton = styled("button")<IStyledButton>`
  border: none;
  background: transparent;
  border-radius: ${commonStyles.borderRadius};
  color: ${(props) => props.fontColor || commonStyles.textBody} !important;
  border: 0.5px solid ${commonStyles.primary};
`;
