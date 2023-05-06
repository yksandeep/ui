import { useState } from "react";
import * as z from "zod";

type ValidationResult<T> = {
  data?: T;
  error?: { [key: string]: string[] };
};

export const useZod = <T>(schema: z.ZodType<T>) => {
  const [value, setValue] = useState<T | undefined>(undefined);
  const [error, setError] = useState<{ [key: string]: string[] } | {}>({});

  function validate(data: unknown): ValidationResult<T> {
    try {
      const parsedData = schema.parse(data);
      setValue(parsedData);
      setError({});
      return { data: parsedData };
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
      return { error: toReturn };
    }
  }

  return { value, setValue, error, validate };
};
export default useZod;
