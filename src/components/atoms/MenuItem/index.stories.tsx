import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import MenuItem, { IMenuItem } from ".";
import { mockMenuItemProps } from "./index.mock";

export default {
  title: "Components/Atoms/MenuItem",
  component: MenuItem,
  argTypes: {},
} as ComponentMeta<typeof MenuItem>;

const Template: ComponentStory<typeof MenuItem> = (args) => (
  <ul style={{ width: "100%", margin: 0, padding: 0 }}>
    <MenuItem {...args} />
  </ul>
);

export const Base = Template.bind({});

Base.args = {
  ...mockMenuItemProps.base,
} as IMenuItem;
