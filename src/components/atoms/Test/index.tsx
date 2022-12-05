import React from "react";
import { Card, CardLink } from "./index.styled";

export interface ITest {
  sampleTextProp: string;
}

export const Test: React.FC<ITest> = ({ sampleTextProp }) => {
  return (
    <div
      style={{
        padding: "20px",
        textAlign: "center",
      }}
    >
      <h4>Basic Template to start with creating components</h4>
      <p>Example Card with DIV HTML Tag</p>
      <Card>Test Component </Card>
      <p>Example Card with Anchor link (a) HTML Tag</p>
      <CardLink href="#">{sampleTextProp} Link</CardLink>
    </div>
  );
};

export default Test;
