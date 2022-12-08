import React from "react";
/**
 * IDemo4 Interface
 * @interface
 * @prop {string}  sampleTextProp
 */
export interface IDemo4 {
    sampleTextProp: string;
}
/**
 * Demo4
 *
 * @prop string variant
 * @prop {string} sampleTextProp
 * @return {React.FC} Demo4 Component
 *
 * @component
 * @example
 * return(
 *    <Demo4 sampleTextProp="Demo4"/>
 * )
 */
export declare const Demo4: React.FC<IDemo4>;
export default Demo4;
