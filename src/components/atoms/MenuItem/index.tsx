import React from "react";
import { StyledMenuItem } from "./index.styled";
/**
 * IMenuItem Interface
 * @interface
 */
export interface IMenuItem extends React.HTMLAttributes<HTMLLIElement> {
  leftIcon?: any;
  rightIcon?: any;
}

/**
 * MenuItem
 *
 * @return {React.FC} MenuItem Component
 *
 * @component
 * @example
 * return(
 *    <MenuItem sampleTextProp="MenuItem"/>
 * )
 */
export const MenuItem: React.FC<IMenuItem> = ({
  leftIcon,
  rightIcon,
  ...props
}) => {
  return (
    <StyledMenuItem {...props}>
      {leftIcon && <>{leftIcon}</>}
      <span style={{ marginRight: rightIcon ? "auto" : "" }}>
        {props.children}
      </span>
      {rightIcon && <>{rightIcon}</>}
    </StyledMenuItem>
  );
};

export default MenuItem;
