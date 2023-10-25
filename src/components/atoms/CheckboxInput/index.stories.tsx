import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import CheckboxInput, { ICheckboxInput } from ".";
import { mockCheckboxInputProps } from "./index.mock";

export default {
  title: "Components/Atoms/CheckboxInput",
  component: CheckboxInput,
  argTypes: {},
} as ComponentMeta<typeof CheckboxInput>;

const Template: ComponentStory<typeof CheckboxInput> = (args) => {
  const handelformSubmittion = (event) => {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    const selectedOptions: { key: string; value: FormDataEntryValue }[] = [];
    formData.forEach((value, key) => {
      selectedOptions.push({ value, key });
    });
    const ptag = document.getElementById("ptag");
    if (ptag) {
      ptag.innerHTML = JSON.stringify(selectedOptions, null, 4);
    }
  };

  return (
    <form onSubmit={handelformSubmittion}>
      <CheckboxInput {...args} />
      <CheckboxInput {...args} value="css" label="CSS" />
      <button type={"submit"}>Submit</button>
      <p id="ptag"></p>
    </form>
  );
};

export const Base = Template.bind({});

Base.args = {
  ...mockCheckboxInputProps.base,
} as ICheckboxInput;
