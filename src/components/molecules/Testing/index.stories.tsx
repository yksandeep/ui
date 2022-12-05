import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import Testing, { ITesting } from ".";
import { mockTestingProps } from "./index.mock";

export default {
  title: "Components/Molecules/Testing",
  component: Testing,
  argTypes: {},
} as ComponentMeta<typeof Testing>;

const Template: ComponentStory<typeof Testing> = (args) => (
  <Testing {...args} />
);

export const Base = Template.bind({});

Base.args = {
  ...mockTestingProps.base,
} as ITesting;
