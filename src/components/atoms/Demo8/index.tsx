import React from "react";
import { Card, CardLink } from "./index.styled";

/**
 * IDemo8 Interface
 * @interface
 * @prop {string}  sampleTextProp
 */
export interface IDemo8 {
  sampleTextProp: string;
}

/**
 * Demo8
 *
 * @prop string variant
 * @prop {string} sampleTextProp
 * @return {React.FC} Demo8 Component
 *
 * @component
 * @example
 * return(
 *    <Demo8 sampleTextProp="Demo8"/>
 * )
 */
export const Demo8: React.FC<IDemo8> = ({ sampleTextProp }) => {
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
      <Card>Demo8 Component </Card>
      <p>Card with Anchor link (a) HTML Tag</p>
      <CardLink href="#">{sampleTextProp} Link</CardLink>
    </div>
  );
};

export default Demo8;
