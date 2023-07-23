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
`;
export const MenuWrapper = styled.div`
  width: 100%;
  position: absolute;
  top: 100%;
`;
