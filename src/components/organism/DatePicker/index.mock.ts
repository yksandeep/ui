import { IDatePicker } from ".";

const base: IDatePicker = {
  onChange: (value) => {
    console.log({ value });
  },
};

export const mockDatePickerProps = {
  base,
};
