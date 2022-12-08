import styled from "styled-components";
export const Card = styled.div `
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;
const CLink = Card.withComponent("a");
export const CardLink = styled(CLink) `
  display: block;

  &:hover {
    border-color: slategray;
  }
`;
//# sourceMappingURL=index.styled.js.map