import { IInputWrapper } from ".";

const base: IInputWrapper = {
  selector: "email",
  errors: { email: ["Enter valid Email"] },
  placeholder: "Start typing...",
};

export const mockInputProps = {
  base,
};
