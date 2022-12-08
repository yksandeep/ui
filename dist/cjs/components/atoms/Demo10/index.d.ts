import React from "react";
/**
 * IDemo10 Interface
 * @interface
 * @prop {string}  sampleTextProp
 */
export interface IDemo10 {
    sampleTextProp: string;
}
/**
 * Demo10
 *
 * @prop string variant
 * @prop {string} sampleTextProp
 * @return {React.FC} Demo10 Component
 *
 * @component
 * @example
 * return(
 *    <Demo10 sampleTextProp="Demo10"/>
 * )
 */
export declare const Demo10: React.FC<IDemo10>;
export default Demo10;
