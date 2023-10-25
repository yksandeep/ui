import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import DatePicker, { IDatePicker } from ".";
import { mockDatePickerProps } from "./index.mock";

export default {
  title: "Components/Organism/DatePicker",
  component: DatePicker,
  argTypes: {},
} as ComponentMeta<typeof DatePicker>;

const Template: ComponentStory<typeof DatePicker> = (args) => (
  <DatePicker {...args} />
);

export const Base = Template.bind({});

Base.args = {
  ...mockDatePickerProps.base,
} as IDatePicker;
