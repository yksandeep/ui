import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import styled from "styled-components";
import HelperWizard, { IHelperWizard } from ".";
import { useHelperWizard } from "../../../shared/utils/hooks/useHelperWizard";
import { mockHelperWizardProps } from "./index.mock";

export default {
  title: "Components/Organism/HelperWizard",
  component: HelperWizard,
  argTypes: {},
  layout: "fullscreen",
} as ComponentMeta<typeof HelperWizard>;

const StyledBox = styled.div<{ background?: string }>`
  background: ${(props) => (props.background ? props.background : "#000")};
  width: fit-content;
  padding: 10px;
  height: 20px;
  position: absolute;
  border-radius: 8px;
`;

const Template: ComponentStory<typeof HelperWizard> = ({ ...args }) => {
  const { play, helperRef } = useHelperWizard({
    autoplay: false,
    interval: 5000,
    navigation: true,
  });
  return (
    <div style={{ marginTop: "20px" }}>
      <button
        onClick={() => {
          play({
            title: "How To Fill This Form ?",
            instruction: [
              {
                id: 1,
                title: "Wassup Enter your Emil Id here ..",
                elementId: "hello",
                example: {},
              },
              {
                id: 2,
                title: "Wassup Enter your password here",
                elementId: "world1",
                example: {},
              },
              {
                id: 3,
                title: "Wassup Enter your password here",
                elementId: "world",
                example: {},
              },
              {
                id: 4,
                title: "Wassup Enter your password here",
                elementId: "hello1",
                example: {},
              },
            ],
          });
        }}
      >
        Play
      </button>
      <HelperWizard {...args} helperRef={helperRef} />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          height: "50vh",
          width: "80vw",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <p id="hello">hello</p>
          <p id="world">world</p>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <p id="hello1">hello1</p>
          {/* <p id="world1">world1</p> */}
        </div>
      </div>
      <div style={{ width: "80vw", height: "50vh", position: "relative" }}>
        <StyledBox id="red" background="red" style={{ left: "0", top: "0" }}>
          Red
        </StyledBox>
        <StyledBox id="blue" background="blue" style={{ right: "0", top: "0" }}>
          Blue
        </StyledBox>
        <StyledBox
          id="green"
          background="green"
          style={{ left: "0", bottom: "0" }}
        >
          Green
        </StyledBox>
        <StyledBox
          id="yellow"
          background="yellow"
          style={{ right: "0", bottom: "0" }}
        >
          Yellow
        </StyledBox>
      </div>
    </div>
  );
};

export const Base = Template.bind({});

Base.args = {
  ...mockHelperWizardProps.base,
} as IHelperWizard;
