import React from "react";
import { Card, CardLink } from "./index.styled";

/**
 * IDemo7 Interface
 * @interface
 * @prop {string}  sampleTextProp
 */
export interface IDemo7 {
  sampleTextProp: string;
}

/**
 * Demo7
 *
 * @prop string variant
 * @prop {string} sampleTextProp
 * @return {React.FC} Demo7 Component
 *
 * @component
 * @example
 * return(
 *    <Demo7 sampleTextProp="Demo7"/>
 * )
 */
export const Demo7: React.FC<IDemo7> = ({ sampleTextProp }) => {
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
      <Card>Demo7 Component </Card>
      <p>Card with Anchor link (a) HTML Tag</p>
      <CardLink href="#">{sampleTextProp} Link</CardLink>
    </div>
  );
};

export default Demo7;
