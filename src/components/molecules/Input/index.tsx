import React from "react";

import { InputError, TextInput } from "@/src/components";
import type { fieldHasErrorObjT } from "@/src/shared/utils/hooks/useValidator";
import { InputContainer } from "./index.styled";

/**
 * IInput Interface
 * @interface
 */
export interface IInput
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "name"> {
  selector: string;
  errors: fieldHasErrorObjT;
  customInput?: (name: string) => React.ReactNode;
}

/**
 * Input
 *
 * @prop string variant
 * @return {React.FC} Input Component
 *
 * @component
 * @example
 * return(
 *    <Input sampleTextProp="Input"/>
 * )
 */
export const Input: React.FC<IInput> = ({
  selector,
  errors,
  customInput,
  ...props
}) => {
  return (
    <InputContainer>
      {customInput ? (
        <>{customInput(selector)}</>
      ) : (
        <TextInput name={selector} {...props} />
      )}
      <InputError selector={selector} errors={errors} />
    </InputContainer>
  );
};

export default Input;
