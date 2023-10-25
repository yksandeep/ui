import { ValidationResult } from "@/src/shared/utils/hooks/useZod";
import { useEffect, useRef, useState } from "react";

/**
 * TFormChildren Type
 * @type
 * @prop {string}  sampleTextProp
 */
type TFormChildren<T> = {
  values: T;
  setValues: React.Dispatch<React.SetStateAction<T>>;
  handelSubmit: (event: any) => void;
  formRef: React.RefObject<HTMLFormElement>;
};

/**
 * IForm Interface
 * @interface
 * @prop {string}  sampleTextProp
 */
export interface IForm<T> {
  style?: React.CSSProperties;
  clasName?: string;
  id?: string;
  initialValues: { [key in keyof T]: T[key] };
  children?:
    | React.ReactNode
    | ((formProps: TFormChildren<T>) => React.ReactNode);
  validation?: (
    data: { [key in keyof T]: T[key] }
  ) => ValidationResult<{ [key in keyof T]: T[key] }>;
  onSubmit?: (values: { [key in keyof T]: T[key] }) => void;
}

/**
 * Form
 *
 * @return {React.FC} Form Component
 *
 * @component
 * @example
 * return(
 *    <Form sampleTextProp="Form"/>
 * )
 */
export const Form = <T,>({
  initialValues,
  validation,
  onSubmit,
  ...props
}: IForm<T>) => {
  const myForm = useRef<HTMLFormElement>(null);
  const [values, setValues] = useState(initialValues);
  const [vals, setVals] = useState(initialValues);

  const handelformSubmittion = (event) => {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    setVals((prev) => {
      const doneKeys = {};
      const valuesInitWith = { ...prev };
      formData.forEach((value, key) => {
        if (key in initialValues) {
          if (key in doneKeys) {
            valuesInitWith[key] = valuesInitWith[key] + "," + value;
          } else {
            valuesInitWith[key] = value;
          }
          doneKeys[key] = true;
        }
      });
      if (validation && onSubmit) {
        const validatedData = validation(valuesInitWith);
        if (validatedData.data) {
          onSubmit(validatedData.data);
        }
      }
      return valuesInitWith;
    });
  };

  useEffect(() => {
    if (myForm.current) {
      Object.keys(values).forEach((key) => {
        const formFields = myForm.current!.querySelectorAll<HTMLInputElement>(
          `[name="${key}"]`
        );
        const fieldValue = values[key];

        if (formFields.length > 0) {
          if (formFields[0].type === "radio") {
            // Handle radio inputs
            formFields.forEach((radio: HTMLInputElement) => {
              radio.checked = radio.value === fieldValue;
            });
          } else if (formFields[0].type === "checkbox") {
            // Handle checkboxes
            formFields.forEach((checkbox: HTMLInputElement) => {
              checkbox.checked = fieldValue.split(",").includes(checkbox.value);
            });
          } else {
            // Handle other input types (text, email, number, etc.)
            formFields.forEach((field: HTMLInputElement) => {
              let mySelectItem =
                myForm.current?.querySelector<HTMLInputElement>(
                  `[data-type=${key}_select]`
                );
              if (mySelectItem) {
                mySelectItem.value = Array.isArray(fieldValue)
                  ? fieldValue.join(",")
                  : ""; // setting values insted of key
              } else {
                if (field.name) {
                  field.value = fieldValue;
                }
              }
            });
          }
        }
      });
    }
  }, [values]);

  return (
    <>
      {/* Render the children prop as a function */}
      {typeof props.children === "function" ? (
        props.children({
          values: vals,
          setValues,
          handelSubmit: handelformSubmittion,
          formRef: myForm,
        })
      ) : (
        <form ref={myForm} onSubmit={handelformSubmittion}>
          {props.children}
        </form>
      )}
    </>
  );
};

export default Form;
