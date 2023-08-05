import { commonStyles } from "@/shared/utils";
import React from "react";
import {
  InstructionsModal,
  StyledBackButton,
  StyledNextButton,
} from "./index.styled";

/**
 * IHelperWizard Interface
 * @interface
 * @extends React.HTMLAttributes<HTMLDivElement>
 */
export interface IHelperWizard extends React.HTMLAttributes<HTMLDivElement> {
  helperRef: React.RefObject<HTMLDivElement>;
  backgroundColor?: string;
  fontColor?: string;
  btnStyle?: React.CSSProperties;
  btnBgcolorhover?: string;
  btntxtcolorhover?: string;
  customButton?: (id: string, children: string) => React.ReactNode;
  customHeader?: (className: string) => React.ReactNode;
  customBodyText?: (className: string) => React.ReactNode;
  customCloseButton?: (id: string) => React.ReactNode;
}

/**
 * HelperWizard
 *
 * @param {IHelperWizard} props - The component props.
 *
 * @component
 * @example
 * return(
 *    <HelperWizard sampleTextProp="HelperWizard"/>
 * )
 */
export const HelperWizard: React.FC<IHelperWizard> = ({
  helperRef,
  customButton,
  customHeader,
  customBodyText,
  customCloseButton,
  ...props
}) => {
  return (
    <>
      {/* <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Raleway:wght@500&display=swap"
        rel="stylesheet"
      /> */}
      <InstructionsModal
        fontColor={props.fontColor}
        backgroundColor={props.backgroundColor}
        ref={helperRef}
      >
        <div className="triangle-up hide"></div>
        <div className="triangle-down hide"></div>
        <div className="triangle-right hide"></div>
        <div className="triangle-left hide"></div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "12px",
            padding: "12px",
          }}
        >
          <div
            style={{
              display: "flex",
              maxWidth: "100%",
              justifyContent: "end",
            }}
          >
            {customCloseButton ? (
              customCloseButton("closeInstWindow")
            ) : (
              <button
                id="closeInstWindow"
                type="button"
                data-bs-dismiss="modal"
                aria-label="Close"
                style={{
                  color: props.fontColor || commonStyles.textBody,
                  backgroundColor: "transparent",
                  border: "none",
                  cursor: "pointer",
                  fontSize: commonStyles.textBodyFont,
                }}
              >
                x
              </button>
            )}
          </div>
          <div
            style={{
              maxWidth: "100%",
            }}
          >
            {customHeader ? (
              <>{customHeader("instructionText")}</>
            ) : (
              <p
                className="instructionText"
                style={{
                  margin: 0,
                  fontSize: commonStyles.textHeadingFont,
                  maxWidth: "100%",
                  color: props.fontColor || commonStyles.textHeading,
                }}
              ></p>
            )}
          </div>
          <div
            style={{
              width: "100%",
              background: props.backgroundColor,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img
              className="instructionImg"
              src=""
              alt=""
              style={{
                maxWidth: "100%",
                maxHeight: "250px",
                borderRadius: "8px",
              }}
            />
          </div>
          <div
            style={{
              maxWidth: "100%",
            }}
          >
            {customBodyText ? (
              <>{customBodyText("instructionTextExample")}</>
            ) : (
              <p
                className="instructionTextExample"
                style={{
                  fontSize: commonStyles.textBodyFont,
                  color: props.fontColor || commonStyles.textBody,
                  maxWidth: "100%",
                }}
              ></p>
            )}
          </div>
          <div
            style={{
              width: "100%",
            }}
          >
            <audio
              className="instructionAudioExample"
              src=""
              autoPlay
              hidden
            ></audio>
          </div>
          <div
            className="wiz-navigation"
            style={{
              display: "flex",
              justifyContent: " space-between",
              alignItems: "center",
              maxWidth: "100%",
            }}
          >
            {customButton ? (
              <>{customButton("backStep", "Back")}</>
            ) : (
              <StyledBackButton
                id="backStep"
                fontColor={props.fontColor}
                style={{
                  padding: "8px 12px",
                  alignSelf: "center",
                  textAlign: "right",
                  fontSize: commonStyles.textBody,
                  cursor: "pointer",
                  ...props.btnStyle,
                }}
              >
                Back
              </StyledBackButton>
            )}
            <p
              className=""
              style={{
                padding: "8px 12px",
                alignSelf: "center",
                marginLeft: "auto",
                textAlign: "right",
                fontSize: commonStyles.textBodyFont,
                cursor: "pointer",
                color: props.fontColor || commonStyles.textBody_50,
              }}
            >
              <span className="currentStep"></span>/
              <span className="totalSteps"></span>
            </p>
            {customButton ? (
              <>{customButton("nextStep", "Next")}</>
            ) : (
              <StyledNextButton
                id="nextStep"
                className=""
                fontColor={props.fontColor}
                btnBgcolorhover={props.btnBgcolorhover}
                btntxtcolorhover={props.btntxtcolorhover}
                style={{
                  padding: "8px 12px",
                  alignSelf: "center",
                  textAlign: "right",
                  fontSize: commonStyles.textBodyFont,
                  cursor: "pointer",
                  ...props.btnStyle,
                }}
              >
                Next
              </StyledNextButton>
            )}
          </div>
        </div>
      </InstructionsModal>
    </>
  );
};

export default HelperWizard;
