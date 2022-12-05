import React from 'react';
/**
 * ButtonProps Interface
 * @interface
 * @prop {'primary' | 'secondary' | 'danger'}  variant
 * @prop {string} children
 *
 */
export interface ButtonProps extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
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
export declare const Button: React.FC<ButtonProps>;
