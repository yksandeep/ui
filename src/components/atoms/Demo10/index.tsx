import React from "react";
import { Card, CardLink } from "./index.styled";

/**
 * IDemo10 Interface
 * @interface
 * @prop {string}  sampleTextProp
 */
export interface IDemo10 {
  sampleTextProp: string;
}

/**
 * Demo10
 *
 * @prop string variant
 * @prop {string} sampleTextProp
 * @return {React.FC} Demo10 Component
 *
 * @component
 * @example
 * return(
 *    <Demo10 sampleTextProp="Demo10"/>
 * )
 */
export const Demo10: React.FC<IDemo10> = ({ sampleTextProp }) => {
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
      <Card>Demo10 Component </Card>
      <p>Card with Anchor link (a) HTML Tag</p>
      <CardLink href="#">{sampleTextProp} Link</CardLink>
    </div>
  );
};

export default Demo10;
