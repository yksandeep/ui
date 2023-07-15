import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import Menu, { IMenu } from ".";
import { LinkMenuItem, MenuItem } from "../../../";
import { mockMenuProps } from "./index.mock";

export default {
  title: "Components/Molecules/Menu",
  component: Menu,
  argTypes: {},
} as ComponentMeta<typeof Menu>;

const Template: ComponentStory<typeof Menu> = (args) => (
  <Menu {...args}>
    <MenuItem>Hello1</MenuItem>
    <LinkMenuItem>Hello1</LinkMenuItem>
  </Menu>
);

export const Base = Template.bind({});

Base.args = {
  ...mockMenuProps.base,
} as IMenu;
