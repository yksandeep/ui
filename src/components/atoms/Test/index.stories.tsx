import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import Test, { ITest } from ".";
import { mockTestProps } from "./index.mock";

export default {
  title: "Components/Atoms/Test",
  component: Test,
  argTypes: {},
} as ComponentMeta<typeof Test>;

const Template: ComponentStory<typeof Test> = (args) => (
  <Test {...args} />
);

export const Base = Template.bind({});

Base.args = {
  ...mockTestProps.base,
} as ITest;
