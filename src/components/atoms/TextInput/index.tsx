import React, { useRef, useState } from "react";
import { InputContainer, StyledInput, StyledLabel } from "./index.styled";

/**
 * IInput Interface
 * @interface
 */
export interface ITextInput
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string | React.ReactNode;
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
  const styledInputRef = useRef<HTMLInputElement | null>(null);
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
          ref={styledInputRef}
          {...props}
          style={inputStyle}
          placeholder={isFocused || !label ? placeholder : ""}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
        <StyledLabel
          inputValue={styledInputRef.current?.value ? true : false}
          isFocused={isFocused}
        >
          {label}
        </StyledLabel>
      </InputContainer>
    </>
  );
};

export default TextInput;
