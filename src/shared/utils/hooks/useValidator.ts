import Ajv, { ErrorObject } from "ajv";
import ajvErrors from "ajv-errors";
import addFormats from "ajv-formats";
import { JTDDataType } from "ajv/dist/jtd";
import { useState } from "react";

export interface SchemaT {
  properties: {
    [key: string]: {
      [key: string]: string | number | { [key: string]: string };
    };
  };
}

/** @interface */
export interface ErrorComponentPropsT {
  selector: string;
  errors: {
    [key: string]: string[];
  };
}

/** @interface */
export interface fieldHasErrorObjT {
  [key: string]: string[];
}

/**
 * @interface SchemaT
 * @property {object} properties
 */

/**
 * @utils
 * @param {SchemaT} schema
 * @returns {Array} [Function,fieldHasErrorObjT]
 *
 * @example
 *
 * schema (refer ajv schema to know more about schema for the useValidator)
 * const [validate,errorList] = useValidator(schema);
 *
 */

const useValidator = (schema: SchemaT) => {
  const ajv = new Ajv({ allErrors: true, $data: true });
  addFormats(ajv, {
    mode: "fast",
    formats: ["date", "time", "password", "email"],
    keywords: true,
  });
  ajvErrors(ajv);

  const [fieldHasError, setFieldHasError] = useState<fieldHasErrorObjT>({});

  const setErrorsInFieldv = (
    item: ErrorObject<string, Record<string, any>, unknown>,
    key: string
  ) => {
    setFieldHasError((prevValues) => {
      let newValues = { ...prevValues };
      if (item && item.message) {
        if (key in newValues) {
          newValues[key].push(item.message);
        } else {
          newValues[key] = [];
          newValues[key].push(item.message);
        }
        return newValues;
      }
      return prevValues;
    });
  };

  const validator = (data: object) => {
    setFieldHasError({});
    type MyData = JTDDataType<typeof schema>;
    let isValidData = ajv.compile<MyData>(schema);
    if (!isValidData(data)) {
      if (isValidData.errors && isValidData.length > 0) {
        isValidData.errors.map((item, idx) => {
          let key = item.instancePath?.split("/")[1];
          if (!key) {
            item.params.errors.map((item2: any, idx2: number) => {
              key = item2.params.missingProperty;
              setErrorsInFieldv(item, key);
            });
          } else {
            setErrorsInFieldv(item, key);
          }
        });
      }
    }
    return isValidData(data);
  };

  let obj: [typeof validator, fieldHasErrorObjT];
  obj = [validator, fieldHasError];
  return obj;
};

export default useValidator;
