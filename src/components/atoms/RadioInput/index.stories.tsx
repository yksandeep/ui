import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import RadioInput, { IRadioInput } from ".";
import { mockRadioInputProps } from "./index.mock";

export default {
  title: "Components/Atoms/RadioInput",
  component: RadioInput,
  argTypes: {},
} as ComponentMeta<typeof RadioInput>;

const Template: ComponentStory<typeof RadioInput> = (args) => {
  return (
    <>
      <RadioInput {...args} />
      <RadioInput {...args} label={"CSS"} />
    </>
  );
};

export const Base = Template.bind({});

Base.args = {
  ...mockRadioInputProps.base,
} as IRadioInput;
