import { IInputWrapper } from ".";

const base: IInputWrapper = {
  selector: "email",
  errors: {},
  placeholder: "Start typing...",
};
const customTextInput: IInputWrapper = {
  selector: "email",
  errors: { email: ["Enter valid Email"] },
  placeholder: "Start typing...",
};

export const mockInputProps = {
  base,
  customTextInput,
};
