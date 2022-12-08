import React from "react";
/**
 * IDemo14 Interface
 * @interface
 * @prop {string}  sampleTextProp
 */
export interface IDemo14 {
    sampleTextProp: string;
}
/**
 * Demo14
 *
 * @prop string variant
 * @prop {string} sampleTextProp
 * @return {React.FC} Demo14 Component
 *
 * @component
 * @example
 * return(
 *    <Demo14 sampleTextProp="Demo14"/>
 * )
 */
export declare const Demo14: React.FC<IDemo14>;
export default Demo14;
