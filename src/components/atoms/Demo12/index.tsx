import React from "react";
import { Card, CardLink } from "./index.styled";

/**
 * IDemo12 Interface
 * @interface
 * @prop {string}  sampleTextProp
 */
export interface IDemo12 {
  sampleTextProp: string;
}

/**
 * Demo12
 *
 * @prop string variant
 * @prop {string} sampleTextProp
 * @return {React.FC} Demo12 Component
 *
 * @component
 * @example
 * return(
 *    <Demo12 sampleTextProp="Demo12"/>
 * )
 */
export const Demo12: React.FC<IDemo12> = ({ sampleTextProp }) => {
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
      <Card>Demo12 Component </Card>
      <p>Card with Anchor link (a) HTML Tag</p>
      <CardLink href="#">{sampleTextProp} Link</CardLink>
    </div>
  );
};

export default Demo12;
