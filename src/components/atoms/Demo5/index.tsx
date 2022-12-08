import React from "react";
import { Card, CardLink } from "./index.styled";

/**
 * IDemo5 Interface
 * @interface
 * @prop {string}  sampleTextProp
 */
export interface IDemo5 {
  sampleTextProp: string;
}

/**
 * Demo5
 *
 * @prop string variant
 * @prop {string} sampleTextProp
 * @return {React.FC} Demo5 Component
 *
 * @component
 * @example
 * return(
 *    <Demo5 sampleTextProp="Demo5"/>
 * )
 */
export const Demo5: React.FC<IDemo5> = ({ sampleTextProp }) => {
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
      <Card>Demo5 Component </Card>
      <p>Card with Anchor link (a) HTML Tag</p>
      <CardLink href="#">{sampleTextProp} Link</CardLink>
    </div>
  );
};

export default Demo5;
