import React from "react";
import { Card, CardLink } from "./index.styled";

/**
 * IDemo2 Interface
 * @interface
 * @prop {string}  sampleTextProp
 */
export interface IDemo2 {
  sampleTextProp: string;
}

/**
 * Demo2
 *
 * @prop string variant
 * @prop {string} sampleTextProp
 * @return {React.FC} Demo2 Component
 *
 * @component
 * @example
 * return(
 *    <Demo2 sampleTextProp="Demo2"/>
 * )
 */
export const Demo2: React.FC<IDemo2> = ({ sampleTextProp }) => {
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
      <Card>Demo2 Component </Card>
      <p>Card with Anchor link (a) HTML Tag</p>
      <CardLink href="#">{sampleTextProp} Link</CardLink>
    </div>
  );
};

export default Demo2;
