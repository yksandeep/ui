import { commonStyles } from "@/src/shared";
import styled from "styled-components";

export const InputErrorContainer = styled.p`
  display: flex;
  flex-direction: column;
  gap: 4px;
  font-size: ${commonStyles.textBodyFont};
  color: ${commonStyles.danger};
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
`;
