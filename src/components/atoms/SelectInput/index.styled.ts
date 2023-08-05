import { commonStyles } from "@/src/shared";
import styled from "styled-components";

export const SelectInputContainer = styled.div<{ multiple?: boolean }>`
  max-width: 100%;
  background: #fff;
  display: flex;
  flex-wrap: ${(props) => (props.multiple ? "wrap" : "")};
  align-items: center;
  /* flex-direction: column; */
  gap: ${commonStyles.gap};
  position: relative;
  input {
    cursor: default;
  }
`;
export const MenuWrapper = styled.div`
  width: 100%;
  position: absolute;
  top: 100%;
  max-height: 150px;
  overflow-y: auto;
  box-shadow: ${commonStyles.boxShadow};
  /* Hide scrollbar for WebKit based browsers (e.g., Chrome, Safari) */
  ::-webkit-scrollbar {
    width: 0; /* You can adjust the width as needed */
  }

  ::-webkit-scrollbar-track {
    background: transparent; /* This makes the scrollbar track transparent */
  }

  ::-webkit-scrollbar-thumb {
    background-color: rgba(
      0,
      0,
      0,
      0
    ); /* This makes the scrollbar thumb transparent */
  }
  scrollbar-width: none; /* Firefox */
`;
