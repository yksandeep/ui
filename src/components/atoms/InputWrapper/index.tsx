import React from "react";

import { InputError, TextInput } from "@/src/components";
import type { fieldHasErrorObjT } from "@/src/shared";
import { InputWrapperContainer } from "./index.styled";

/**
 * IInputWrapper Interface
 * @interface
 */
export interface IInputWrapper
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "name"> {
  selector: string;
  errors: fieldHasErrorObjT;
  customInput?: (
    props: Partial<React.InputHTMLAttributes<HTMLInputElement>>
  ) => React.ReactNode;
}

/**
 * InputWrapper
 * @return {React.FC} InputWrapper Component
 *
 * @component
 * @example
 * return(
 *    <InputWrapper />
 * )
 */
export const InputWrapper: React.FC<IInputWrapper> = ({
  selector,
  errors,
  customInput,
  onChange,
  ...props
}) => {
  return (
    <InputWrapperContainer>
      {customInput ? (
        <>{customInput({ name: selector, onChange: onChange, ...props })}</>
      ) : (
        <TextInput name={selector} {...props} onChange={onChange} />
      )}
      <InputError selector={selector} errors={errors} />
      <br />
    </InputWrapperContainer>
  );
};

export default InputWrapper;
