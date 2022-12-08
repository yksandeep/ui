import React from "react";
import { Card, CardLink } from "./index.styled";

/**
 * IDemo4 Interface
 * @interface
 * @prop {string}  sampleTextProp
 */
export interface IDemo4 {
  sampleTextProp: string;
}

/**
 * Demo4
 *
 * @prop string variant
 * @prop {string} sampleTextProp
 * @return {React.FC} Demo4 Component
 *
 * @component
 * @example
 * return(
 *    <Demo4 sampleTextProp="Demo4"/>
 * )
 */
export const Demo4: React.FC<IDemo4> = ({ sampleTextProp }) => {
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
      <Card>Demo4 Component </Card>
      <p>Card with Anchor link (a) HTML Tag</p>
      <CardLink href="#">{sampleTextProp} Link</CardLink>
    </div>
  );
};

export default Demo4;
