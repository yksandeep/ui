import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import Demo7, { IDemo7 } from ".";
import { mockDemo7Props } from "./index.mock";

export default {
  title: "Components/Atoms/Demo7",
  component: Demo7,
  argTypes: {},
} as ComponentMeta<typeof Demo7>;

const Template: ComponentStory<typeof Demo7> = (args) => (
  <Demo7 {...args} />
);

export const Base = Template.bind({});

Base.args = {
  ...mockDemo7Props.base,
} as IDemo7;
