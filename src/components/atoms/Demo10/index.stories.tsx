import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import Demo10, { IDemo10 } from ".";
import { mockDemo10Props } from "./index.mock";

export default {
  title: "Components/Atoms/Demo10",
  component: Demo10,
  argTypes: {},
} as ComponentMeta<typeof Demo10>;

const Template: ComponentStory<typeof Demo10> = (args) => (
  <Demo10 {...args} />
);

export const Base = Template.bind({});

Base.args = {
  ...mockDemo10Props.base,
} as IDemo10;
