import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import styled from "styled-components";
import HelperWizard, { IHelperWizard } from ".";
import { commonStyles, useHelperWizard } from "../../..";
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
  padding: 8px 12px;
  border-radius: 4px;
  color: #fff;
`;

const Template: ComponentStory<typeof HelperWizard> = ({ ...args }) => {
  const { play, helperRef } = useHelperWizard({
    autoplay: false,
    interval: 2500,
    navigation: true,
  });
  return (
    <div
      style={{
        marginTop: "20px",
        display: "flex",
        flexDirection: "column",
        gap: "10px",
      }}
    >
      <div>
        <button
          style={{
            padding: "4px 8px",
            color: commonStyles.primary,
          }}
          onClick={() => {
            play({
              title: "How To Fill This Form ?",
              instruction: [
                {
                  id: 1,
                  title: "Wassup Enter your Emil Id here ..",

                  elementId: "hello",
                  example: {
                    text: "hello there this is a text",
                  },
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
      </div>
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
          <StyledBox id="hello">hello</StyledBox>
          <StyledBox id="world">world</StyledBox>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <StyledBox id="hello1">hello1</StyledBox>
          <StyledBox id="world1">world1</StyledBox>
        </div>
      </div>
    </div>
  );
};

export const Base = Template.bind({});

Base.args = {
  ...mockHelperWizardProps.base,
} as IHelperWizard;
