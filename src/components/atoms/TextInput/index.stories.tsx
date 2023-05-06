import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import TextInput, { ITextInput } from ".";
import { mockInputProps } from "./index.mock";

export default {
  title: "Components/Atoms/Text Input",
  component: TextInput,
  argTypes: {},
} as ComponentMeta<typeof TextInput>;

const Template: ComponentStory<typeof TextInput> = (args) => (
  <TextInput {...args} />
);

export const Base = Template.bind({});

Base.args = {
  ...mockInputProps.base,
} as ITextInput;
