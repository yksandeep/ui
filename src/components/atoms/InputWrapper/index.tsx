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
  customInput?: (name: string) => React.ReactNode;
}

/**
 * InputWrapper
 *
 * @prop string variant
 * @return {React.FC} InputWrapper Component
 *
 * @component
 * @example
 * return(
 *    <InputWrapper sampleTextProp="InputWrapper"/>
 * )
 */
export const InputWrapper: React.FC<IInputWrapper> = ({
  selector,
  errors,
  customInput,
  ...props
}) => {
  return (
    <InputWrapperContainer>
      {customInput ? (
        <>{customInput(selector)}</>
      ) : (
        <TextInput name={selector} {...props} />
      )}
      <InputError selector={selector} errors={errors} />
    </InputWrapperContainer>
  );
};

export default InputWrapper;
