import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import InputError, { IInputError } from ".";
import { mockInputErrorProps } from "./index.mock";

export default {
  title: "Components/Atoms/InputError",
  component: InputError,
  argTypes: {},
} as ComponentMeta<typeof InputError>;

const Template: ComponentStory<typeof InputError> = (args) => (
  <InputError {...args} />
);

export const Base = Template.bind({});

Base.args = {
  ...mockInputErrorProps.base,
} as IInputError;
