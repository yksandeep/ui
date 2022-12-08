import React from "react";
import { Card, CardLink } from "./index.styled";

/**
 * ITest Interface
 * @interface
 * @prop {string}  sampleTextProp
 */
export interface ITest {
  sampleTextProp: string;
}

/**
 * Test
 *
 * @prop string variant
 * @prop {string} sampleTextProp
 * @return {React.FC} Test Component
 *
 * @component
 * @example
 * return(
 *    <Test sampleTextProp="Test"/>
 * )
 */
export const Test: React.FC<ITest> = ({ sampleTextProp }) => {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        background: "#fff",
        padding: "20px",
      }}
    >
      <p>Card with DIV HTML Tag</p>
      <Card>Test Component </Card>
      <p>Card with Anchor link (a) HTML Tag</p>
      <CardLink href="#">{sampleTextProp} Link</CardLink>
    </div>
  );
};

export default Test;
