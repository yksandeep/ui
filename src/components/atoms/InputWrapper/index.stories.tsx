import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { z } from "zod";
import InputWrapper, { IInputWrapper } from ".";
import { useZod } from "../../../shared/utils/hooks/useZod";
import CheckboxInput from "../CheckboxInput";
import RadioInput from "../RadioInput";
import { TextInput } from "../TextInput";
import { mockInputProps } from "./index.mock";

export default {
  title: "Components/Atoms/InputWrapper",
  component: InputWrapper,
  argTypes: {},
} as ComponentMeta<typeof InputWrapper>;

const Template: ComponentStory<typeof InputWrapper> = (args) => (
  <InputWrapper {...args} />
);

const CustomTextInputTemplate: ComponentStory<typeof InputWrapper> = (args) => {
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
export const CustomTextInput = CustomTextInputTemplate.bind({});
export const CustomCheckboxInput = Template.bind({});
export const CustomRadioInput = Template.bind({});

Base.args = {
  ...mockInputProps.base,
} as IInputWrapper;

CustomTextInput.args = {
  ...mockInputProps.customTextInput,
  customInput: ({ ...props }) => {
    return <TextInput {...props} />;
  },
} as IInputWrapper;

CustomCheckboxInput.args = {
  ...mockInputProps.base,
  customInput: ({ ...props }) => {
    return <CheckboxInput {...props} label="CSS in JS" value="css_in_js" />;
  },
} as IInputWrapper;

CustomRadioInput.args = {
  ...mockInputProps.base,
  customInput: ({ ...props }) => {
    return <RadioInput {...props} label="CSS in JS" value="css_in_js" />;
  },
} as IInputWrapper;
