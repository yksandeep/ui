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
 * @return {React.FC} Input Component
 *
 * @component
 * @example
 * return(
 *    <Input />
 * )
 */
export const TextInput: React.FC<ITextInput> = ({ style, ...props }) => {
  return (
    <>
      <InputContainer style={style}>
        <StyledInput {...props} />
      </InputContainer>
    </>
  );
};

export default TextInput;
