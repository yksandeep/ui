import React from "react";
/**
 * IDemo13 Interface
 * @interface
 * @prop {string}  sampleTextProp
 */
export interface IDemo13 {
    sampleTextProp: string;
}
/**
 * Demo13
 *
 * @prop string variant
 * @prop {string} sampleTextProp
 * @return {React.FC} Demo13 Component
 *
 * @component
 * @example
 * return(
 *    <Demo13 sampleTextProp="Demo13"/>
 * )
 */
export declare const Demo13: React.FC<IDemo13>;
export default Demo13;
