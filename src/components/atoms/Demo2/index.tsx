import React from "react";
import { Card, CardLink } from "./index.styled";

export interface IDemo2 {
  sampleTextProp: string;
}

// export const Demo2: React.FC<IDemo2> = ({ sampleTextProp }) => {
//   return <div className={styles.container}>{sampleTextProp}</div>;
// };
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
