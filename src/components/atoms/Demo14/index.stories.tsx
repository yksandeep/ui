import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import Demo14, { IDemo14 } from ".";
import { mockDemo14Props } from "./index.mock";

export default {
  title: "Components/Atoms/Demo14",
  component: Demo14,
  argTypes: {},
} as ComponentMeta<typeof Demo14>;

const Template: ComponentStory<typeof Demo14> = (args) => (
  <Demo14 {...args} />
);

export const Base = Template.bind({});

Base.args = {
  ...mockDemo14Props.base,
} as IDemo14;
