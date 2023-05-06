import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { z } from "zod";
import Input, { IInput } from ".";
import { useZod } from "../../../shared/utils/hooks/useZod";
import { mockInputProps } from "./index.mock";

export default {
  title: "Components/Molecules/Input",
  component: Input,
  argTypes: {},
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => {
  const { value, error, validate } = useZod(
    z.object({
      email: z.string().email(),
    })
  );

  return (
    <>
      <Input
        {...args}
        errors={error}
        onChange={(e) => validate({ email: e.target.value })}
      />
      <div style={{ marginTop: "20px" }}>
        Valid Email: {value?.email ? "Valid Email" : "Not Valid Email"}
      </div>
    </>
  );
};

export const Base = Template.bind({});

Base.args = {
  ...mockInputProps.base,
} as IInput;
