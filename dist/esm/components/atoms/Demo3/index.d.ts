import React from "react";
/**
 * IDemo3 Interface
 * @interface
 * @prop {string}  sampleTextProp
 */
export interface IDemo3 {
    sampleTextProp: string;
}
/**
 * Demo3
 *
 * @prop string variant
 * @prop {string} sampleTextProp
 * @return {React.FC} Demo3 Component
 *
 * @component
 * @example
 * return(
 *    <Demo3 sampleTextProp="Demo3"/>
 * )
 */
export declare const Demo3: React.FC<IDemo3>;
export default Demo3;
