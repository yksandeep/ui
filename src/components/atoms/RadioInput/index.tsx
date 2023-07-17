import React from "react";
import { CustomRadioLabel, TCustomRadioLabelSize } from "./index.styled";
/**
 * IRadioInput Interface
 * @interface
 * @prop {string}  sampleTextProp
 */
export interface IRadioInput
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "type"> {
  label: string;
  radioStyle?: "square" | "circle";
  background?: string;
  fullBackground?: boolean;
  radioSize?: TCustomRadioLabelSize;
}

/**
 * RadioInput
 * @return {React.FC} RadioInput Component
 *
 * @component
 * @example
 * return(
 *    <RadioInput />
 * )
 */
export const RadioInput: React.FC<IRadioInput> = ({
  label,
  radioStyle,
  background,
  fullBackground,
  radioSize = "large",
  ...props
}) => {
  return (
    <>
      <CustomRadioLabel
        square={radioStyle === "square"}
        background={background}
        fullBackground={fullBackground}
        size={radioSize}
      >
        <input type={"radio"} {...props} />
        <span></span>
        {label}
      </CustomRadioLabel>
      <br />
    </>
  );
};

export default RadioInput;
