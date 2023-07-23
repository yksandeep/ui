import React from "react";
import { MdClose } from "react-icons/md";
import { StyledChip } from "./index.styled";

/**
 * IChip Interface
 * @interface
 * @prop {string}  sampleTextProp
 */
export interface IChip extends React.HTMLAttributes<HTMLSpanElement> {
  background?: string;
  borderRadius?: string;
  size?: "small" | "medium" | "large";
  children?: string;
  makeUpper?: boolean;
  showCancel?: boolean;
  color?: string;
  onClickCancel?: (e: React.MouseEvent<SVGElement, MouseEvent>) => void;
}

/**
 * Chip
 *
 * @prop string variant
 * @prop {string} sampleTextProp
 * @return {React.FC} Chip Component
 *
 * @component
 * @example
 * return(
 *    <Chip sampleTextProp="Chip"/>
 * )
 */
export const Chip: React.FC<IChip> = ({
  children,
  showCancel,
  color,
  onClickCancel,
  ...props
}) => {
  if (props.makeUpper) {
    children = children?.toUpperCase();
  }
  return (
    <StyledChip {...props}>
      <span style={{ marginRight: showCancel ? "4px" : "", color: color }}>
        {children}
      </span>
      {showCancel && (
        <MdClose
          onClick={onClickCancel}
          color={color}
          style={{ cursor: "pointer" }}
        />
      )}
    </StyledChip>
  );
};

export default Chip;
