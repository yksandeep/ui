import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import RadioInput, { IRadioInput } from ".";
import SelectInput from "../SelectInput";
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
      <SelectInput
        name={"boy"}
        lable="BOY?"
        multiple
        options={[
          { name: "sandeep 0", id: "0", age: 18 },
          { name: "sandeep 1", id: "1", age: 20 },
          { name: "sandeep 2", id: "2", age: 20 },
          { name: "sandeep 3", id: "3", age: 20 },
          { name: "sandeep 4", id: "4", age: 20 },
          { name: "sandeep 5", id: "5", age: 20 },
          { name: "sandeep 6", id: "6", age: 20 },
          { name: "sandeep 7", id: "7", age: 20 },
          { name: "sandeep 8", id: "8", age: 20 },
          { name: "sandeep 9", id: "9", age: 20 },
        ]}
        keyProp="name"
        valueProp="age"
        onChange={(val) => console.log({ val })}
      />
      <button type={"submit"}>Submit</button>
      <p id="ptag"></p>
    </form>
  );
};

export const Base = Template.bind({});

Base.args = {
  ...mockRadioInputProps.base,
} as IRadioInput;
