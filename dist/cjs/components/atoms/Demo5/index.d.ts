import React from "react";
/**
 * IDemo5 Interface
 * @interface
 * @prop {string}  sampleTextProp
 */
export interface IDemo5 {
    sampleTextProp: string;
}
/**
 * Demo5
 *
 * @prop string variant
 * @prop {string} sampleTextProp
 * @return {React.FC} Demo5 Component
 *
 * @component
 * @example
 * return(
 *    <Demo5 sampleTextProp="Demo5"/>
 * )
 */
export declare const Demo5: React.FC<IDemo5>;
export default Demo5;
