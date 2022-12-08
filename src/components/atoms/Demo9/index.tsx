import React from "react";
import { Card, CardLink } from "./index.styled";

/**
 * IDemo9 Interface
 * @interface
 * @prop {string}  sampleTextProp
 */
export interface IDemo9 {
  sampleTextProp: string;
}

/**
 * Demo9
 *
 * @prop string variant
 * @prop {string} sampleTextProp
 * @return {React.FC} Demo9 Component
 *
 * @component
 * @example
 * return(
 *    <Demo9 sampleTextProp="Demo9"/>
 * )
 */
export const Demo9: React.FC<IDemo9> = ({ sampleTextProp }) => {
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
      <Card>Demo9 Component </Card>
      <p>Card with Anchor link (a) HTML Tag</p>
      <CardLink href="#">{sampleTextProp} Link</CardLink>
    </div>
  );
};

export default Demo9;
