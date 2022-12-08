import React from "react";
/**
 * IDemo Interface
 * @interface
 * @prop {string}  sampleTextProp
 */
export interface IDemo {
    sampleTextProp: string;
}
/**
 * Demo
 *
 * @prop string variant
 * @prop {string} sampleTextProp
 * @return {React.FC} Demo Component
 *
 * @component
 * @example
 * return(
 *    <Demo sampleTextProp="Demo"/>
 * )
 */
export declare const Demo: React.FC<IDemo>;
export default Demo;
