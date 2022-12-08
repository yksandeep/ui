import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import Demo4, { IDemo4 } from ".";
import { mockDemo4Props } from "./index.mock";

export default {
  title: "Components/Atoms/Demo4",
  component: Demo4,
  argTypes: {},
} as ComponentMeta<typeof Demo4>;

const Template: ComponentStory<typeof Demo4> = (args) => (
  <Demo4 {...args} />
);

export const Base = Template.bind({});

Base.args = {
  ...mockDemo4Props.base,
} as IDemo4;
