import React from 'react';

/**
 * ButtonProps Interface
 * @interface
 * @prop {'primary' | 'secondary' | 'danger'}  variant
 * @prop {string} children
 *
 */
export interface ButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  variant?: 'primary' | 'secondary' | 'danger';
}

/**
 * Button (ATOM Component)
 *
 * @prop {'primary' | 'secondary' | 'danger'} variant
 * @prop {string} children
 * @return {React.ReactElement} Button Component
 *
 * @component
 * @example
 * return(
 *    <Button variant="primary" children="Submit"/>
 * )
 */
export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  ...props
}) => {
  const { children, style } = props;

  const _style: React.CSSProperties = style || {};

  switch (variant) {
    case 'primary':
      _style.backgroundColor = '#006E7F';
      _style.color = '#fff';
      break;
    case 'secondary':
      _style.backgroundColor = '#F8CB2E';
      _style.color = '#000';
      break;
    case 'danger':
      _style.backgroundColor = '#B22727';
      _style.color = '#fff';
      break;
  }

  _style.padding = '5px 10px';

  return (
    <button style={_style} {...props}>
      {children}
    </button>
  );
};
