import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import RadioInput, { IRadioInput } from ".";
import { mockRadioInputProps } from "./index.mock";

export default {
  title: "Components/Atoms/RadioInput",
  component: RadioInput,
  argTypes: {},
} as ComponentMeta<typeof RadioInput>;

const Template: ComponentStory<typeof RadioInput> = (args) => {
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
      <RadioInput {...args} />
      <RadioInput {...args} value="css" label="CSS" />
      <button type={"submit"}>Submit</button>
      <p id="ptag"></p>
    </form>
  );
};

export const Base = Template.bind({});

Base.args = {
  ...mockRadioInputProps.base,
} as IRadioInput;
