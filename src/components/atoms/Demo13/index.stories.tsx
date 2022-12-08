import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import Demo13, { IDemo13 } from ".";
import { mockDemo13Props } from "./index.mock";

export default {
  title: "Components/Atoms/Demo13",
  component: Demo13,
  argTypes: {},
} as ComponentMeta<typeof Demo13>;

const Template: ComponentStory<typeof Demo13> = (args) => (
  <Demo13 {...args} />
);

export const Base = Template.bind({});

Base.args = {
  ...mockDemo13Props.base,
} as IDemo13;
