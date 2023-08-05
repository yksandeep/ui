import { commonStyles } from "@/src/shared";
import styled from "styled-components";

export const InputContainer = styled.div`
  margin: 0px;
  padding: 4px 8px;
  border-radius: ${commonStyles.borderRadius};
  border: 0.5px solid ${commonStyles.primary};
  box-sizing: border-box;
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
