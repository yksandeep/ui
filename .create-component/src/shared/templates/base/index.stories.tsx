import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import BaseTemplate, { IBaseTemplate } from ".";
import { mockBaseTemplateProps } from "./index.mock";

export default {
  title: "Shared/Templates/Base",
  component: BaseTemplate,
  argTypes: {},
} as ComponentMeta<typeof BaseTemplate>;

const Template: ComponentStory<typeof BaseTemplate> = (args) => (
  <BaseTemplate {...args} />
);

export const Base = Template.bind({});

Base.args = {
  ...mockBaseTemplateProps.base,
} as IBaseTemplate;
