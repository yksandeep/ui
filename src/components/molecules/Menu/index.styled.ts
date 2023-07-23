import { commonStyles } from "@/src/shared";
import styled from "styled-components";

export type StyledMenuProps = {
  indicator?: boolean;
  vertical?: boolean;
  gap?: string;
  hideScroll?: boolean;
  indicatorSize?: string;
  hoverEffect?: boolean;
  scrollable?: boolean;
};

export const StyledMenu = styled.ul<StyledMenuProps>`
  margin: 0;
  padding:0;
  display: flex;
  background: ${commonStyles.background};
  flex-direction: ${(props) => (props.vertical ? "column" : "row")};
  gap: ${(props) => props.gap || "4px"};
  width: ${(props) => props.style?.width || "100%"};
  box-shadow: ${commonStyles.boxShadow};
  justify-content: flex-start;
  overflow: ${(props) => (props.scrollable ? "auto" : "none")};

  /* Hide scrollbar for Chrome, Safari and Opera */
  &::-webkit-scrollbar {
    display: ${(props) => (props.hideScroll ? "none" : "")};
  }
  &:-ms-overflow-style: ${(props) =>
    props.hideScroll ? "none" : ""}; /* IE and Edge */
  scrollbar-width: ${(props) => (props.hideScroll ? "none" : "")}; /* Firefox */

  .active {
    position: relative;
    background: ${commonStyles.primary};
    color: ${commonStyles.fontColor.bgPrimary}
  }
  .active.hover{
    background: ${commonStyles.primary} !important;
    color:${commonStyles.fontColor.bgPrimary} !important;
  }
  .hover {
    position: relative;
    background: ${(props) => (props.hoverEffect ? commonStyles.hover : "")};
    :after {
      content: "";
      height: ${(props) =>
        props.indicatorSize ? props.indicatorSize : "0.5px"};
      width: 100%;
      position: absolute;
      bottom: 0px;
      left: 0px;
      background: ${(props) => (props.indicator ? commonStyles.primary : "")};
    }
  }

  > :nth-child(n) {

    :hover {
      position: relative;
      background: ${(props) => (props.hoverEffect ? commonStyles.hover : "")};
      :after {
        content: "";
        height: ${(props) =>
          props.indicatorSize ? props.indicatorSize : "0.5px"};
        width: 100%;
        position: absolute;
        bottom: 0px;
        left: 0px;
        background: ${(props) => (props.indicator ? commonStyles.primary : "")};
      }
    }
  }
`;
