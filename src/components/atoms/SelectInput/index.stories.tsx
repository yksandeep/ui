import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import SelectInput, { ISelectInput } from ".";
import {
  BaseOptions,
  Custom_1_options,
  mockSelectInputProps,
} from "./index.mock";

export default {
  title: "Components/Atoms/SelectInput",
  component: SelectInput,
  argTypes: {},
} as ComponentMeta<typeof SelectInput>;

const Template: ComponentStory<typeof SelectInput> = (args) => (
  <>
    <SelectInput {...args} />
    {/* <select>
      <option>hello</option>
    </select> */}
  </>
);

export const Base = Template.bind({});
export const Custom = Template.bind({});
export const Custom_1 = Template.bind({});

Base.args = {
  ...mockSelectInputProps.base,
  style: {
    width: "50%",
  },
  itemToString: (item) => {
    return String(item.name);
  },
  itemToValue: (item) => {
    item.age;
  },
} as ISelectInput<typeof BaseOptions[0]>;

Custom.parameters = {
  docs: { iframeHeight: "400px" },
};

Custom.args = {
  ...mockSelectInputProps.custom,
  renderOption: ({ item, i }) => {
    return (
      <div key={item.id} style={{ padding: "5px 7px" }}>
        <p style={{ margin: 0, marginBottom: "4px" }}>Name: {item.name}</p>
        <p style={{ margin: 0 }}>Age: {item.age}</p>
      </div>
    );
  },
} as ISelectInput<typeof BaseOptions[0]>;

Custom_1.args = {
  ...mockSelectInputProps.Custom_1,
} as ISelectInput<typeof Custom_1_options[0]>;
