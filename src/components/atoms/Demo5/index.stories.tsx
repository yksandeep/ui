import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import Demo5, { IDemo5 } from ".";
import { mockDemo5Props } from "./index.mock";

export default {
  title: "Components/Atoms/Demo5",
  component: Demo5,
  argTypes: {},
} as ComponentMeta<typeof Demo5>;

const Template: ComponentStory<typeof Demo5> = (args) => (
  <Demo5 {...args} />
);

export const Base = Template.bind({});

Base.args = {
  ...mockDemo5Props.base,
} as IDemo5;
