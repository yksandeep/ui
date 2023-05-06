import { commonStyles } from "@/src/shared";
import styled from "styled-components";

export const StyledMenuItem = styled.li`
  margin: 0;
  box-sizing: border-box;
  list-style: none;
  display: flex;
  gap: 4px;
  align-items: center;
  background: ${commonStyles.background};
  width: 100%;
  height: 100%;
  padding: 4px 8px;
`;
