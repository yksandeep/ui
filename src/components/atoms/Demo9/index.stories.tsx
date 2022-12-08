import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import Demo9, { IDemo9 } from ".";
import { mockDemo9Props } from "./index.mock";

export default {
  title: "Components/Atoms/Demo9",
  component: Demo9,
  argTypes: {},
} as ComponentMeta<typeof Demo9>;

const Template: ComponentStory<typeof Demo9> = (args) => (
  <Demo9 {...args} />
);

export const Base = Template.bind({});

Base.args = {
  ...mockDemo9Props.base,
} as IDemo9;
