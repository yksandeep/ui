import styled from "styled-components";

export const Card = styled.div`
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const CLink = Card.withComponent("a");

export const CardLink = styled(CLink)`
  display: block;

  &:hover {
    border-color: slategray;
  }
`;

export interface IInstructionsModal {
  backgroundColor?: string;
  btnBgcolorhover?: string;
  btntxtcolorhover?: string;
  fontColor?: string;
}

export const InstructionsModal = styled.div<IInstructionsModal>`
  display: none;
  max-width: 400px;
  min-width: 400px;
  min-height: 50px;
  background: ${(props) => props.backgroundColor || "#fff"};
  align-content: center;
  position: absolute;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  z-index: 99999999999;
  font-family: "Raleway", sans-serif;
  border-radius: 4px;

  p {
    color: ${(props) => props.fontColor || "#999"} !important;
  }
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
      background: ${(props) => props.backgroundColor || "#fff"};
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
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
      background: ${(props) => props.backgroundColor || "#fff"};
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
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
      background: ${(props) => props.backgroundColor || "#fff"};
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
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
      background: ${(props) => props.backgroundColor || "#fff"};
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
      transform: rotate(45deg);
      position: absolute;
      bottom: 6px;
    }
  }
  #closeInstWindow {
    color: ${(props) => props.fontColor || "#999"} !important;
  }

  #nextStep {
    border: none;
    background: transparent;
    border-radius: 6px;
    color: ${(props) => props.fontColor || "#999"} !important;
    &:hover,
    :active {
      background-color: ${(props) => props.btnBgcolorhover || "blue"};
      color: ${(props) => props.btntxtcolorhover || "#fff"} !important;
    }
  }
  #backStep {
    border: none;
    background: transparent;
    color: ${(props) => props.fontColor || "#999"} !important;
  }
`;
