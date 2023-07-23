import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import Loader from ".";

export default {
  title: "Components/Atoms/Loader",
  component: Loader,
  argTypes: {
    backgroundOpacity: { control: "number" },
    bgColor: { control: "color" },
    text: { control: "text" },
    loaderColor: { control: "color" },
    textSize: { control: "text" },
    strokeWidth: { control: "number" },
    textColor: { control: "color" },
    stroke: { control: "color" },
  },
} as ComponentMeta<typeof Loader>;

const Template: ComponentStory<typeof Loader> = (args) => {
  return (
    <div style={{ width: "300px", height: "300px" }}>
      <Loader {...args} />
    </div>
  );
};
const Template2: ComponentStory<typeof Loader> = (args) => {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gridTemplateRows: "1fr 1fr",
        gridTemplateAreas: `"top-left top-right"
                         "bottom-left bottom-right"`,
        width: "400px",
        height: "400px",
      }}
    >
      <div style={{ gridArea: "top-left", backgroundColor: "red" }}>
        <Loader text="Top Left" {...args} />
      </div>
      <div style={{ gridArea: "top-right", backgroundColor: "green" }}>
        <Loader text="Top Right" {...args} />
      </div>
      <div style={{ gridArea: "bottom-left", backgroundColor: "blue" }}>
        <Loader text="Bottom Left" {...args} />
      </div>
      <div style={{ gridArea: "bottom-right", backgroundColor: "yellow" }}>
        <Loader text="Bottom Right" {...args} />
      </div>
    </div>
  );
};

export const PleaseWait = Template.bind({});
export const MultipleLoadingScreen = Template2.bind({});
PleaseWait.args = {
  backgroundOpacity: 0.7,
  bgColor: "#f4f4f4",
  text: "Please wait",
  stroke: "#000",
  strokeWidth: 2,
  textSize: "20px",
  textColor: "#000",
};
MultipleLoadingScreen.args = {
  backgroundOpacity: 0.7,
  bgColor: "#f4f4f4",
  stroke: "#000",
  strokeWidth: 2,
  textSize: "20px",
  textColor: "#000",
};
