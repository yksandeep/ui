import React from "react";
import { Card, CardLink } from "./index.styled";

/**
 * IDemo13 Interface
 * @interface
 * @prop {string}  sampleTextProp
 */
export interface IDemo13 {
  sampleTextProp: string;
}

/**
 * Demo13
 *
 * @prop string variant
 * @prop {string} sampleTextProp
 * @return {React.FC} Demo13 Component
 *
 * @component
 * @example
 * return(
 *    <Demo13 sampleTextProp="Demo13"/>
 * )
 */
export const Demo13: React.FC<IDemo13> = ({ sampleTextProp }) => {
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
      <Card>Demo13 Component </Card>
      <p>Card with Anchor link (a) HTML Tag</p>
      <CardLink href="#">{sampleTextProp} Link</CardLink>
    </div>
  );
};

export default Demo13;
