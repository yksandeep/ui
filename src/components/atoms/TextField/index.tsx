import React from "react";

/**
 * TextFieldProps Interface
 * @interface
 *
 */
export interface TextFieldProps
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {}

const TextFieldStyle: React.CSSProperties = {
  padding: "5px 10px",
  display: "flex",
  alignItems: "center",
  background: "#fff",
  borderRadius: "4px",
  border: "1px solid #282c34",
  width: "100%",
};

/**
 * TextField (ATOM Component)
 * @component
 */
export const TextField: React.FC<TextFieldProps> = ({ ...props }) => {
  const { style } = props;

  const _style: React.CSSProperties = style || TextFieldStyle;

  return (
    <div style={_style}>
      <input
        style={{ outline: "none", border: "none", width: "100%" }}
        {...props}
      />
    </div>
  );
};
