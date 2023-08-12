import React, { useState } from "react";
import { InputContainer, StyledInput, StyledLabel } from "./index.styled";

/**
 * IInput Interface
 * @interface
 */
export interface ITextInput
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  inputStyle?: React.CSSProperties;
}

/**
 * Input
 * @return {React.FC} Input Component
 *
 * @component
 * @example
 * return(
 *    <Input {...args}/>
 * )
 */
export const TextInput: React.FC<ITextInput> = ({
  style,
  label,
  placeholder,
  inputStyle,
  ...props
}) => {
  const [isFocused, setIsFocused] = useState(false);

  // Handle input focus
  const handleFocus = (e) => {
    setIsFocused(true);
    if (props.onFocus) {
      props.onFocus(e);
    }
  };

  // Handle input blur
  const handleBlur = (e) => {
    setIsFocused(false);
    if (props.onBlur) {
      props.onBlur(e);
    }
  };
  return (
    <>
      <InputContainer style={style}>
        <StyledInput
          {...props}
          style={inputStyle}
          placeholder={isFocused ? placeholder : ""}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
        <StyledLabel isFocused={isFocused}>{label}</StyledLabel>
      </InputContainer>
    </>
  );
};

export default TextInput;
