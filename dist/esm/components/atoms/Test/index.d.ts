import React from "react";
/**
 * ITest Interface
 * @interface
 * @prop {string}  sampleTextProp
 */
export interface ITest {
    sampleTextProp: string;
}
/**
 * Test
 *
 * @prop string variant
 * @prop {string} sampleTextProp
 * @return {React.FC} Test Component
 *
 * @component
 * @example
 * return(
 *    <Test sampleTextProp="Test"/>
 * )
 */
export declare const Test: React.FC<ITest>;
export default Test;
