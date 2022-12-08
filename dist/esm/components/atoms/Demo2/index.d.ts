import React from "react";
/**
 * IDemo2 Interface
 * @interface
 * @prop {string}  sampleTextProp
 */
export interface IDemo2 {
    sampleTextProp: string;
}
/**
 * Demo2
 *
 * @prop string variant
 * @prop {string} sampleTextProp
 * @return {React.FC} Demo2 Component
 *
 * @component
 * @example
 * return(
 *    <Demo2 sampleTextProp="Demo2"/>
 * )
 */
export declare const Demo2: React.FC<IDemo2>;
export default Demo2;
