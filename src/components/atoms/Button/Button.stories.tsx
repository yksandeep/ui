import React from "react";
import { Button } from "./index";

export default {
  title: "Components/Atoms/Button",
  component: Button,
};

const Template = (args) => <Button {...args} />;

const PrimaryButton = Template.bind({});

PrimaryButton.args = {
  variant: "primary",
};

export const Primary = {
  args: {
    variant: "primary",
    children: "Submit",
  },
};
export const secondary = {
  args: {
    variant: "secondary",
    children: "Cancel",
  },
};
export const danger = {
  args: {
    variant: "danger",
    children: "Close",
  },
};
