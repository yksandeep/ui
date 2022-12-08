import React from "react";
/**
 * IDemo9 Interface
 * @interface
 * @prop {string}  sampleTextProp
 */
export interface IDemo9 {
    sampleTextProp: string;
}
/**
 * Demo9
 *
 * @prop string variant
 * @prop {string} sampleTextProp
 * @return {React.FC} Demo9 Component
 *
 * @component
 * @example
 * return(
 *    <Demo9 sampleTextProp="Demo9"/>
 * )
 */
export declare const Demo9: React.FC<IDemo9>;
export default Demo9;
