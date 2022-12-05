import React from "react";
/**
 * TextFieldProps Interface
 * @interface
 *
 */
export interface TextFieldProps extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
}
/**
 * TextField (ATOM Component)
 * @component
 */
export declare const TextField: React.FC<TextFieldProps>;
