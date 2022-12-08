import React from "react";
import { Card, CardLink } from "./index.styled";

/**
 * IBaseTemplate Interface
 * @interface
 * @prop {string}  sampleTextProp
 */
export interface IBaseTemplate {
  sampleTextProp: string;
}

/**
 * BaseTemplate
 *
 * @prop string variant
 * @prop {string} sampleTextProp
 * @return {React.FC} BaseTemplate Component
 *
 * @component
 * @example
 * return(
 *    <BaseTemplate sampleTextProp="BaseTemplate"/>
 * )
 */
export const BaseTemplate: React.FC<IBaseTemplate> = ({ sampleTextProp }) => {
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
      <Card>BaseTemplate Component </Card>
      <p>Card with Anchor link (a) HTML Tag</p>
      <CardLink href="#">{sampleTextProp} Link</CardLink>
    </div>
  );
};

export default BaseTemplate;
