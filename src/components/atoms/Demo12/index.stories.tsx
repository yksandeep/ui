import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import Demo12, { IDemo12 } from ".";
import { mockDemo12Props } from "./index.mock";

export default {
  title: "Components/Atoms/Demo12",
  component: Demo12,
  argTypes: {},
} as ComponentMeta<typeof Demo12>;

const Template: ComponentStory<typeof Demo12> = (args) => (
  <Demo12 {...args} />
);

export const Base = Template.bind({});

Base.args = {
  ...mockDemo12Props.base,
} as IDemo12;
