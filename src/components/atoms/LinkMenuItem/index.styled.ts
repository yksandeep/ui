import styled from "styled-components";

import { StyledMenuItem } from "@/src/components/atoms/MenuItem/index.styled";
const LinkMenuItem = StyledMenuItem.withComponent("a");
export const StyledLinkMenuItem = styled(LinkMenuItem)`
  text-decoration: none;
  color: initial;
`;
