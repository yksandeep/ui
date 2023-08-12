import { commonStyles } from "@/src/shared";
import styled from "styled-components";

export const InputContainer = styled.div`
  margin: 0px;
  padding: 4px 8px;
  border-radius: ${commonStyles.borderRadius};
  border: 0.5px solid ${commonStyles.primary};
  box-sizing: border-box;
  position: relative;
`;
export const StyledInput = styled.input`
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
  border: none !important;
  outline: none !important;
  width: 100%;
  background: transparent;
`;

export const StyledLabel = styled.span<{ isFocused: boolean }>`
  position: absolute;
  top: ${({ isFocused }) => (isFocused ? "-8px" : "5px")};
  background: #fff;
  width: fit-content;
  box-sizing: border-box;
  left: 8px;
  font-size: ${({ isFocused }) => (isFocused ? "12px" : "14px")};
  transition: all 0.2s ease-in-out;
  color: ${({ isFocused }) =>
    isFocused ? commonStyles.primary : commonStyles.disabled};
  pointer-events: none;
  user-select: none;
`;
