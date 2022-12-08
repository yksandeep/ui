import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import Demo11, { IDemo11 } from ".";
import { mockDemo11Props } from "./index.mock";

export default {
  title: "Components/Atoms/Demo11",
  component: Demo11,
  argTypes: {},
} as ComponentMeta<typeof Demo11>;

const Template: ComponentStory<typeof Demo11> = (args) => (
  <Demo11 {...args} />
);

export const Base = Template.bind({});

Base.args = {
  ...mockDemo11Props.base,
} as IDemo11;
