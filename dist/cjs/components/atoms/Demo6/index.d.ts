import React from "react";
/**
 * IDemo6 Interface
 * @interface
 * @prop {string}  sampleTextProp
 */
export interface IDemo6 {
    sampleTextProp: string;
}
/**
 * Demo6
 *
 * @prop string variant
 * @prop {string} sampleTextProp
 * @return {React.FC} Demo6 Component
 *
 * @component
 * @example
 * return(
 *    <Demo6 sampleTextProp="Demo6"/>
 * )
 */
export declare const Demo6: React.FC<IDemo6>;
export default Demo6;
