import React from "react";
/**
 * IDemo8 Interface
 * @interface
 * @prop {string}  sampleTextProp
 */
export interface IDemo8 {
    sampleTextProp: string;
}
/**
 * Demo8
 *
 * @prop string variant
 * @prop {string} sampleTextProp
 * @return {React.FC} Demo8 Component
 *
 * @component
 * @example
 * return(
 *    <Demo8 sampleTextProp="Demo8"/>
 * )
 */
export declare const Demo8: React.FC<IDemo8>;
export default Demo8;
