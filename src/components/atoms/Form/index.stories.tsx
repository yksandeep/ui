import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { z } from "zod";
import useZod from "../../../shared/utils/hooks/useZod";
import DatePicker from "../../organism/DatePicker";
import CheckboxInput from "../CheckboxInput";
import InputWrapper from "../InputWrapper";
import RadioInput from "../RadioInput";
import SelectInput from "../SelectInput";
import TextInput from "../TextInput";
import { Form } from "./index";

const initValues = {
  email: "",
  "Question:Select 2 milk based product": "",
  relative: "",
  sendEmail: "",
  date: "",
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
      date: z.string().refine(
        (val) => {
          if (!val) {
            return false;
          }
          let isInvalid = true;
          try {
            const dates = JSON.parse(val);
            if ("startDate" in dates && dates.startDate) {
              new Date(dates.startDate);
            }
            if ("endsDate" in dates && dates.endDate) {
              new Date(dates.startDate);
            }
          } catch (error) {
            isInvalid = false;
          }
          return isInvalid;
        },
        { message: "Invalid Date" }
      ),
    })
  );

  return (
    <Form
      initialValues={initValues}
      validation={validate}
      onSubmit={(val) => {
        // console.log(val.date.split("/")[0].trim());
        console.log({
          ...val,
          // date: {
          //   start: new Date(val.date.split("/")[0].trim()).toISOString(),
          //   end: new Date(val.date.split("/")[1].trim()).toISOString(),
          // },
        });
        // console.log({
        //   start: new Date(val.date.split("/")[0].trim()).toISOString(),
        //   end: new Date(val.date.split("/")[1].trim()).toISOString(),
        // });
      }}
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
                  label="Email"
                />
              )}
            />
            <InputWrapper
              selector="Question:Select 2 milk based product"
              errors={error}
              customInput={(props) => (
                <>
                  <p style={{ margin: 0, marginBottom: "8px" }}>
                    Select 2 milk based product
                  </p>
                  <CheckboxInput
                    {...props}
                    checkbozSize={"small"}
                    label="Milk"
                    value={"Milk"}
                  />
                  <CheckboxInput
                    {...props}
                    checkbozSize={"small"}
                    label="Curd"
                    value={"Curd"}
                  />
                  <CheckboxInput
                    {...props}
                    checkbozSize={"small"}
                    label="Black Coffee"
                    value={"Black Coffee"}
                  />
                </>
              )}
            />
            <InputWrapper
              selector="relative"
              errors={error}
              customInput={(props) => (
                <SelectInput
                  name={props.name}
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
            <InputWrapper
              selector="sendEmail"
              errors={error}
              customInput={(props) => (
                <>
                  <p style={{ margin: 0, marginBottom: "8px" }}>Yes or No?</p>
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
            <InputWrapper
              selector="date"
              errors={error}
              customInput={(props) => (
                <DatePicker name={props.name} enableRangeSelection={false} />
              )}
            />
            <button type={"submit"}>Submit</button>
            <div>
              <h3>Native Form Values (Using initial values)</h3>
              <pre>{JSON.stringify(error, null, 4)}</pre>
              <pre>{JSON.stringify(value, null, 4)}</pre>
            </div>
          </form>
        );
      }}
    </Form>
  );
};

export const Base = Template.bind({});

Base.args = {};
