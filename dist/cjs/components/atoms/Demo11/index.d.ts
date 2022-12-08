import React from "react";
/**
 * IDemo11 Interface
 * @interface
 * @prop {string}  sampleTextProp
 */
export interface IDemo11 {
    sampleTextProp: string;
}
/**
 * Demo11
 *
 * @prop string variant
 * @prop {string} sampleTextProp
 * @return {React.FC} Demo11 Component
 *
 * @component
 * @example
 * return(
 *    <Demo11 sampleTextProp="Demo11"/>
 * )
 */
export declare const Demo11: React.FC<IDemo11>;
export default Demo11;
