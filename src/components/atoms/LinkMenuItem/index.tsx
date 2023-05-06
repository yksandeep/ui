import React from "react";
import { StyledLinkMenuItem } from "./index.styled";

/**
 * ILinkMenuItem Interface
 * @interface
 */
export interface ILinkMenuItem extends React.HTMLAttributes<HTMLAnchorElement> {
  leftIcon?: any;
  rightIcon?: any;
  href?: string;
}

/**
 * LinkMenuItem
 *
 * @return {React.FC} LinkMenuItem Component
 *
 * @component
 * @example
 * return(
 *    <LinkMenuItem sampleTextProp="LinkMenuItem"/>
 * )
 */
export const LinkMenuItem: React.FC<ILinkMenuItem> = ({
  leftIcon,
  rightIcon,
  ...props
}) => {
  return (
    <StyledLinkMenuItem {...props}>
      {leftIcon && <>{leftIcon}</>}
      <span style={{ marginRight: rightIcon ? "auto" : "" }}>
        {props.children}
      </span>
      {rightIcon && <>{rightIcon}</>}
    </StyledLinkMenuItem>
  );
};

export default LinkMenuItem;
