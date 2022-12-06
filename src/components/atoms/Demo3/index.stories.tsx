import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import Demo3, { IDemo3 } from ".";
import { mockDemo3Props } from "./index.mock";

export default {
  title: "Components/Atoms/Demo3",
  component: Demo3,
  argTypes: {},
} as ComponentMeta<typeof Demo3>;

const Template: ComponentStory<typeof Demo3> = (args) => (
  <Demo3 {...args} />
);

export const Base = Template.bind({});

Base.args = {
  ...mockDemo3Props.base,
} as IDemo3;
