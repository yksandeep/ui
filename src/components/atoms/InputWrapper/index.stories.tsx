import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { z } from "zod";
import InputWrapper, { IInputWrapper } from ".";
import { useZod } from "../../../shared/utils/hooks/useZod";
import { mockInputProps } from "./index.mock";

export default {
  title: "Components/Atoms/InputWrapper",
  component: InputWrapper,
  argTypes: {},
} as ComponentMeta<typeof InputWrapper>;

const Template: ComponentStory<typeof InputWrapper> = (args) => {
  const { value, error, validate } = useZod(
    z.object({
      email: z.string().email(),
    })
  );
  return (
    <>
      <InputWrapper
        {...args}
        errors={error}
        onChange={(e) => {
          const { data, error } = validate({ email: e.target.value });
          console.log({ data, error });
        }}
      />
    </>
  );
};

export const Base = Template.bind({});

Base.args = {
  ...mockInputProps.base,
} as IInputWrapper;
