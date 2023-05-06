import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import LinkMenuItem, { ILinkMenuItem } from ".";
import { mockLinkMenuItemProps } from "./index.mock";

export default {
  title: "Components/Atoms/LinkMenuItem",
  component: LinkMenuItem,
  argTypes: {},
} as ComponentMeta<typeof LinkMenuItem>;

const Template: ComponentStory<typeof LinkMenuItem> = (args) => (
  <LinkMenuItem {...args} />
);

export const Base = Template.bind({});

Base.args = {
  ...mockLinkMenuItemProps.base,
} as ILinkMenuItem;
