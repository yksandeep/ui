import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import Chip, { IChip } from ".";
import { mockChipProps } from "./index.mock";

export default {
  title: "Components/Atoms/Chip",
  component: Chip,
  argTypes: {},
} as ComponentMeta<typeof Chip>;

const Template: ComponentStory<typeof Chip> = (args) => (
  <Chip {...args} />
);

export const Base = Template.bind({});

Base.args = {
  ...mockChipProps.base,
} as IChip;
