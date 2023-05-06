import { IInput } from ".";

const base: IInput = {
  selector: "email",
  errors: { email: ["Enter valid Email"] },
  placeholder: "Email Id",
};

export const mockInputProps = {
  base,
};
