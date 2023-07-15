import React, { Children } from "react";
import { StyledMenu, StyledMenuProps } from "./index.styled";
/**
 * IMenu Interface
 * @interface
 */
export interface IMenu
  extends React.HTMLAttributes<HTMLUListElement>,
    StyledMenuProps {}

/**
 * Menu
 *
 * @return {React.FC} Menu Component
 *
 * @component
 * @example
 * return(
 *    <Menu sampleTextProp="Menu"/>
 * )
 */
export const Menu: React.FC<IMenu> = ({ ...props }) => {
  const arrayChildren = Children.toArray(props.children);

  if (arrayChildren.length === 0) {
    console.warn("Menu Conmponent is used without any Child");
    return <></>;
  }
  return (
    <StyledMenu {...props}>
      {Children.map(arrayChildren, (child, idx) => {
        return <>{child}</>;
      })}
    </StyledMenu>
  );
};

export default Menu;
