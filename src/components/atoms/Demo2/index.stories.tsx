import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import Demo2, { IDemo2 } from ".";
import { mockDemo2Props } from "./index.mock";

export default {
  title: "Components/Atoms/Demo2",
  component: Demo2,
  argTypes: {},
} as ComponentMeta<typeof Demo2>;

const Template: ComponentStory<typeof Demo2> = (args) => (
  <Demo2 {...args} />
);

export const Base = Template.bind({});

Base.args = {
  ...mockDemo2Props.base,
} as IDemo2;
