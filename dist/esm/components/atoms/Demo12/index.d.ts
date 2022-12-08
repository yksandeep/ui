import React from "react";
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
export declare const Demo12: React.FC<IDemo12>;
export default Demo12;
