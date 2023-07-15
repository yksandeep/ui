import { useState } from "react";
import * as z from "zod";

type ValidationResult<T> = {
  data: T | undefined;
  error: { [K in keyof T]: string[] } | {};
};

export const useZod = <T>(schema: z.ZodType<T>) => {
  const [value, setValue] = useState<T | undefined>(undefined);
  const [error, setError] = useState<{ [K in keyof T]: string[] } | {}>({});

  const validate = (data: T): ValidationResult<T> => {
    try {
      const parsedData = schema.parse(data);
      setValue(parsedData);
      setError({});
      return { data: parsedData, error: {} };
    } catch (err) {
      const errors = err as z.ZodError;
      const toReturn: { [key: string]: string[] } = {};
      errors.errors.forEach((item) => {
        if (toReturn[item.path[0]]) {
          toReturn[item.path[0]].push(item.message);
        } else {
          toReturn[item.path[0]] = [item.message];
        }
      });
      setError(toReturn);
      setValue(undefined);
      return {
        data: undefined,
        error: toReturn as { [K in keyof T]: string[] },
      };
    }
  };

  return { value, error, validate };
};
export default useZod;
