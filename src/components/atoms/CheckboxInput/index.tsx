import React from "react";
import { CustomCheckboxLabel, TCheckboxLabelSize } from "./index.styled";

/**
 * ICheckboxInput Interface
 * @interface
 * @prop {string}  sampleTextProp
 */
export interface ICheckboxInput
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "type"> {
  label: string;
  radioStyle?: "square" | "circle";
  background?: string;
  fullBackground?: boolean;
  checkbozSize?: TCheckboxLabelSize;
}

/**
 * CheckboxInput
 *
 * @prop string variant
 * @prop {string} sampleTextProp
 * @return {React.FC} CheckboxInput Component
 *
 * @component
 * @example
 * return(
 *    <CheckboxInput sampleTextProp="CheckboxInput"/>
 * )
 */
export const CheckboxInput: React.FC<ICheckboxInput> = ({
  label,
  radioStyle,
  background,
  fullBackground,
  checkbozSize = "large",
  ...props
}) => {
  return (
    <>
      <CustomCheckboxLabel
        square={radioStyle === "square"}
        background={background}
        fullBackground={fullBackground}
        size={checkbozSize}
      >
        <input type={"checkbox"} {...props} />
        <span></span>
        {label}
      </CustomCheckboxLabel>
      <br />
    </>
  );
};

export default CheckboxInput;
