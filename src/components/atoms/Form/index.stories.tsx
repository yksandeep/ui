import { ComponentMeta, ComponentStory } from "@storybook/react";
import React, { useEffect } from "react";
import { z } from "zod";
import useZod from "../../../shared/utils/hooks/useZod";
import CheckboxInput from "../CheckboxInput";
import InputWrapper from "../InputWrapper";
import RadioInput from "../RadioInput";
import SelectInput from "../SelectInput";
import TextInput from "../TextInput";
import { Form } from "./index";

const initValues = {
  email: "",
  "Question:Select 2 milk based product": "",
  relative: "25",
  sendEmail: "",
};

export default {
  title: "Components/Atoms/Form",
  component: Form,
  args: {
    initialValues: initValues,
  },
} as ComponentMeta<typeof Form>;

const Template: ComponentStory<typeof Form> = (args) => {
  const { value, error, validate } = useZod(
    z.object({
      email: z.string().email({ message: "Please provide valid Email" }),
      "Question:Select 2 milk based product": z
        .string()
        .refine((val) => val.split(",").length == 2, {
          message: "Invalid Selection, Select two",
        }),
      relative: z
        .string()
        .refine((val) => (val ? val.split(",").length > 0 : false), {
          message: "Please Select at least one",
        }),
      sendEmail: z.string().refine((val) => ["YES", "NO"].includes(val), {
        message: "Invalid Selection. Select between Yes or no",
      }),
    })
  );

  useEffect(() => {
    if (value) {
      console.log(value);
    }
  }, [value]);

  return (
    <Form
      initialValues={initValues}
      validation={validate}
      onSubmit={(val) => console.log(val)}
    >
      {(formProps) => {
        return (
          <form ref={formProps.formRef} onSubmit={formProps.handelSubmit}>
            <InputWrapper
              selector="email"
              errors={error}
              customInput={(props) => (
                <TextInput
                  {...props}
                  placeholder="Start Typing..."
                  name="email"
                />
              )}
            />
            <br />
            <InputWrapper
              selector="Question:Select 2 milk based product"
              errors={error}
              customInput={(props) => (
                <>
                  <p style={{ margin: 0 }}>Select 2 milk based product</p>
                  <br />
                  <CheckboxInput
                    checkbozSize={"small"}
                    label="Milk"
                    value={"Milk"}
                    name="Question:Select 2 milk based product"
                  />
                  <CheckboxInput
                    checkbozSize={"small"}
                    label="Curd"
                    value={"Curd"}
                    name="Question:Select 2 milk based product"
                  />
                  <CheckboxInput
                    checkbozSize={"small"}
                    label="Black Coffee"
                    value={"Black Coffee"}
                    name="Question:Select 2 milk based product"
                  />
                </>
              )}
            />
            <br />

            <InputWrapper
              selector="relative"
              errors={error}
              customInput={(props) => (
                <SelectInput
                  name="relative"
                  lable="Select...?"
                  multiple
                  value={formProps.values.relative}
                  options={[
                    { name: "Sandeep kumar", id: "0", age: 25 },
                    { name: "Pradeep kumar", id: "1", age: 31 },
                    { name: "Deepika kumar", id: "2", age: 32 },
                  ]}
                  // renderOption={({ item }) => {
                  //   return (
                  //     <div>
                  //       <p style={{ margin: 0 }}>{item.name}</p>
                  //       <p style={{ margin: 0 }}>{item.age}</p>
                  //     </div>
                  //   );
                  // }}
                  itemToString={(item) => item.name}
                  itemToValue={(item) => item.age}
                />
              )}
            />
            <br />

            <InputWrapper
              selector="sendEmail"
              errors={error}
              customInput={(props) => (
                <>
                  <p style={{ margin: 0 }}>Yes or No?</p>
                  <br />
                  <RadioInput
                    radioSize={"small"}
                    label="Yes"
                    value={"YES"}
                    name="sendEmail"
                  />
                  <RadioInput
                    radioSize={"small"}
                    label="no"
                    value={"NO"}
                    name="sendEmail"
                  />
                </>
              )}
            />
            <br />

            <button type={"submit"}>Submit</button>
            <div>
              <h3>Native Form Values (Using initial values)</h3>
              <pre>{JSON.stringify(error, null, 4)}</pre>
            </div>
          </form>
        );
      }}
    </Form>
  );
};

export const Base = Template.bind({});

Base.args = {};
