import React from "react";
import { Card, CardLink } from "./index.styled";

/**
 * IDemo3 Interface
 * @interface
 * @prop {string}  sampleTextProp
 */
export interface IDemo3 {
  sampleTextProp: string;
}

/**
 * Demo3
 *
 * @prop string variant
 * @prop {string} sampleTextProp
 * @return {React.FC} Demo3 Component
 *
 * @component
 * @example
 * return(
 *    <Demo3 sampleTextProp="Demo3"/>
 * )
 */
export const Demo3: React.FC<IDemo3> = ({ sampleTextProp }) => {
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
      <Card>Demo3 Component </Card>
      <p>Card with Anchor link (a) HTML Tag</p>
      <CardLink href="#">{sampleTextProp} Link</CardLink>
    </div>
  );
};

export default Demo3;
