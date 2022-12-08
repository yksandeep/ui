import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import Demo6, { IDemo6 } from ".";
import { mockDemo6Props } from "./index.mock";

export default {
  title: "Components/Atoms/Demo6",
  component: Demo6,
  argTypes: {},
} as ComponentMeta<typeof Demo6>;

const Template: ComponentStory<typeof Demo6> = (args) => (
  <Demo6 {...args} />
);

export const Base = Template.bind({});

Base.args = {
  ...mockDemo6Props.base,
} as IDemo6;
