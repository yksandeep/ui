import React from "react";
import { Card, CardLink } from "./index.styled";

/**
 * IDemo6 Interface
 * @interface
 * @prop {string}  sampleTextProp
 */
export interface IDemo6 {
  sampleTextProp: string;
}

/**
 * Demo6
 *
 * @prop string variant
 * @prop {string} sampleTextProp
 * @return {React.FC} Demo6 Component
 *
 * @component
 * @example
 * return(
 *    <Demo6 sampleTextProp="Demo6"/>
 * )
 */
export const Demo6: React.FC<IDemo6> = ({ sampleTextProp }) => {
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
      <Card>Demo6 Component </Card>
      <p>Card with Anchor link (a) HTML Tag</p>
      <CardLink href="#">{sampleTextProp} Link</CardLink>
    </div>
  );
};

export default Demo6;
