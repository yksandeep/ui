import { IInputError } from ".";

const base: IInputError = {
  selector: "test",
  errors: { test: ["Please Check and try again"] },
};

export const mockInputErrorProps = {
  base,
};
