import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import Demo, { IDemo } from ".";
import { mockDemoProps } from "./index.mock";

export default {
  title: "Components/Atoms/Demo",
  component: Demo,
  argTypes: {},
} as ComponentMeta<typeof Demo>;

const Template: ComponentStory<typeof Demo> = (args) => <Demo {...args} />;

export const Base = Template.bind({});

Base.args = {
  ...mockDemoProps.base,
} as IDemo;
