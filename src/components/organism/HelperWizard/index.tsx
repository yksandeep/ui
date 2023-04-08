import React from "react";
import { InstructionsModal } from "./index.styled";

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
  ...props
}) => {
  return (
    <>
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Raleway:wght@500&display=swap"
        rel="stylesheet"
      />
      <InstructionsModal
        fontColor={props.fontColor}
        backgroundColor={props.backgroundColor}
        btnBgcolorhover={props.btnBgcolorhover}
        btntxtcolorhover={props.btntxtcolorhover}
        ref={helperRef}
      >
        <div className="triangle-up hide"></div>
        <div className="triangle-down hide"></div>
        <div className="triangle-right hide"></div>
        <div className="triangle-left hide"></div>
        <div>
          <button
            id="closeInstWindow"
            type="button"
            data-bs-dismiss="modal"
            aria-label="Close"
            style={{
              color: "#999",
              backgroundColor: "transparent",
              border: "none",
              marginBottom: "0",
              position: "absolute",
              right: "14px",
              cursor: "pointer",
              top: "10px",
            }}
          >
            X
          </button>

          <p
            className="instructionText"
            style={{
              marginBottom: 0,
              paddingLeft: "1rem",
              paddingRight: "1rem",
              paddingBottom: "1.5rem",
              fontSize: "18px",
              maxWidth: "100%",
              paddingTop: "1rem",
            }}
          ></p>
          <div
            style={{
              width: "95%",
              margin: "auto",
              background: props.backgroundColor,
            }}
          >
            <img
              className="instructionImg"
              src=""
              alt=""
              style={{
                maxWidth: "100%",
                borderRadius: "8px",
                marginBottom: "1rem",
              }}
            />
          </div>
          <div style={{ width: "95%", margin: "auto" }}>
            <p
              className="instructionTextExample"
              style={{
                marginBottom: "0",
                paddingLeft: "0.4rem",
                paddingBottom: "0",
                fontSize: "14px",
                color: "#999",
                maxWidth: "100%",
              }}
            ></p>
          </div>
          <div style={{ width: "95%", margin: "auto" }}>
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
              padding: "5px",
              marginTop: "10px",
            }}
          >
            <button
              id="backStep"
              style={{
                padding: "12px 15px",
                alignSelf: "center",
                textAlign: "right",
                fontSize: "14px",
                cursor: "pointer",
              }}
            >
              Back
            </button>
            <p
              className=""
              style={{
                padding: "12px 15px",
                alignSelf: "center",
                marginLeft: "auto",
                textAlign: "right",
                fontSize: "14px",
                cursor: "pointer",
              }}
            >
              <span className="currentStep"></span>/
              <span className="totalSteps"></span>
            </p>
            <button
              id="nextStep"
              className=""
              style={{
                padding: "12px 15px",
                alignSelf: "center",
                textAlign: "right",
                fontSize: "14px",
                cursor: "pointer",
              }}
            >
              Next
            </button>
          </div>
        </div>
      </InstructionsModal>
    </>
  );
};

export default HelperWizard;
