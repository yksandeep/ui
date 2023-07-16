import { MdWarningAmber } from "@/shared/icons";
import { commonStyles } from "@/src/shared";
import { fieldHasErrorObjT } from "@/src/shared/utils/hooks/useValidator";
import { useEffect, useState } from "react";
import { InputErrorContainer } from "./index.styled";

/**
 * TextField ErrorComponentPropsT interface
 * @interface IInputError
 * @prop {string} selector One of the property from errors
 * @prop {fieldHasErrorObjT} errors Error list with key as field and list of string as value
 */
export interface IInputError {
  selector: string;
  errors: fieldHasErrorObjT;
}

/**
 * Field Error component
 *
 * @param {Object} props
 * @param {string} props.selector
 * @param {IInputError} props.errors
 * @return {JSX.Element} HTML input fields as mentioned in formfields
 *
 * @component TextField Error
 */
export const InputError: React.FC<IInputError> = ({ ...props }) => {
  const [fieldErrors, setFieldErrors] = useState<string[]>([]);
  useEffect(() => {
    if (props.selector in props.errors) {
      setFieldErrors((prev) => {
        if (
          JSON.stringify(prev) === JSON.stringify(props.errors[props.selector])
        ) {
          return prev;
        }
        return props.errors[props.selector];
      });
    } else {
      setFieldErrors([]);
    }
  }, [props.errors]);
  return (
    <InputErrorContainer>
      {fieldErrors.map((item, idx) => {
        return (
          <span
            key={idx}
            data-testid={`${props.selector}-error`}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "4px",
              fontSize: commonStyles.errorFont,
            }}
          >
            <MdWarningAmber /> {item}
          </span>
        );
      })}
    </InputErrorContainer>
  );
};

export default InputError;
