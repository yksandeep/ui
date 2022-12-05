import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import Testing2, { ITesting2 } from ".";
import { mockTesting2Props } from "./index.mock";

export default {
  title: "Components/Organism/Testing2",
  component: Testing2,
  argTypes: {},
} as ComponentMeta<typeof Testing2>;

const Template: ComponentStory<typeof Testing2> = (args) => (
  <Testing2 {...args} />
);

export const Base = Template.bind({});

Base.args = {
  ...mockTesting2Props.base,
} as ITesting2;
