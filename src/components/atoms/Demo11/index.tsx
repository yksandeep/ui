import React from "react";
import { Card, CardLink } from "./index.styled";

/**
 * IDemo11 Interface
 * @interface
 * @prop {string}  sampleTextProp
 */
export interface IDemo11 {
  sampleTextProp: string;
}

/**
 * Demo11
 *
 * @prop string variant
 * @prop {string} sampleTextProp
 * @return {React.FC} Demo11 Component
 *
 * @component
 * @example
 * return(
 *    <Demo11 sampleTextProp="Demo11"/>
 * )
 */
export const Demo11: React.FC<IDemo11> = ({ sampleTextProp }) => {
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
      <Card>Demo11 Component </Card>
      <p>Card with Anchor link (a) HTML Tag</p>
      <CardLink href="#">{sampleTextProp} Link</CardLink>
    </div>
  );
};

export default Demo11;
