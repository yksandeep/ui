import React from "react";
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
export declare const Demo7: React.FC<IDemo7>;
export default Demo7;
