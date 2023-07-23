import { ISelectInput } from ".";
export const BaseOptions = [
  { name: "sandeep_0", id: "0", age: 18 },
  { name: "sandeep_1", id: "1", age: 20 },
  { name: "sandeep_2", id: "2", age: 20 },
  { name: "sandeep_3", id: "3", age: 20 },
  { name: "sandeep_4", id: "4", age: 20 },
  { name: "sandeep_5", id: "5", age: 20 },
  { name: "sandeep_6", id: "6", age: 20 },
  { name: "sandeep_7", id: "7", age: 20 },
  { name: "sandeep_8", id: "8", age: 20 },
  { name: "sandeep_9", id: "9", age: 20 },
];
export const Custom_1_options = [
  { value: "sandeep", key: "1" },
  { value: "sandeep_1", key: "2" },
];

const base: ISelectInput<typeof BaseOptions[0]> = {
  options: BaseOptions,
  valueProp: "id",
  keyProp: "name",
  filteringKeys: ["name"],
  lable: "Basic select..",
  onChange: (values) => console.log({ values }),
};
const custom: ISelectInput<typeof BaseOptions[0]> = {
  options: BaseOptions,
  keyProp: "name",
  valueProp: "id",
  filteringKeys: ["name", "age"],
  lable: "With custom render option...",
  onChange: (values) => console.log({ values }),
};
const Custom_1: ISelectInput<typeof Custom_1_options[0]> = {
  options: Custom_1_options,
  keyProp: "key",
  valueProp: "value",
  lable: "With Array of key value object",
  onChange: (values) => console.log({ values }),
};

export const mockSelectInputProps = {
  base,
  custom,
  Custom_1,
};
