import React from "react";
import { InputContainer, StyledInput } from "./index.styled";

/**
 * IInput Interface
 * @interface
 */
export interface ITextInput
  extends React.InputHTMLAttributes<HTMLInputElement> {}

/**
 * Input
 *
 * @prop string variant
 * @return {React.FC} Input Component
 *
 * @component
 * @example
 * return(
 *    <Input />
 * )
 */
export const TextInput: React.FC<ITextInput> = ({ ...props }) => {
  return (
    <InputContainer>
      <StyledInput {...props} />
    </InputContainer>
  );
};

export default TextInput;
