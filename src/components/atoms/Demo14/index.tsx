import React from "react";
import { Card, CardLink } from "./index.styled";

/**
 * IDemo14 Interface
 * @interface
 * @prop {string}  sampleTextProp
 */
export interface IDemo14 {
  sampleTextProp: string;
}

/**
 * Demo14
 *
 * @prop string variant
 * @prop {string} sampleTextProp
 * @return {React.FC} Demo14 Component
 *
 * @component
 * @example
 * return(
 *    <Demo14 sampleTextProp="Demo14"/>
 * )
 */
export const Demo14: React.FC<IDemo14> = ({ sampleTextProp }) => {
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
      <Card>Demo14 Component </Card>
      <p>Card with Anchor link (a) HTML Tag</p>
      <CardLink href="#">{sampleTextProp} Link</CardLink>
    </div>
  );
};

export default Demo14;
