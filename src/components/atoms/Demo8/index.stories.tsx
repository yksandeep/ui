import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import Demo8, { IDemo8 } from ".";
import { mockDemo8Props } from "./index.mock";

export default {
  title: "Components/Atoms/Demo8",
  component: Demo8,
  argTypes: {},
} as ComponentMeta<typeof Demo8>;

const Template: ComponentStory<typeof Demo8> = (args) => (
  <Demo8 {...args} />
);

export const Base = Template.bind({});

Base.args = {
  ...mockDemo8Props.base,
} as IDemo8;
