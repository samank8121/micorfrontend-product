import clsx from 'clsx';
import React, { useState } from 'react';
import styles from './button.module.scss';

type Props = {
  variant?: 'filled' | 'outlined' | 'elevated';
  size?: 'sm' | 'm' | 'l' | 'xl';
  icon?: React.ReactNode;
  type?: 'button'|'submit'|'reset'
  loading?: boolean;
  loadingText?: string;
  delay?: number;
};

export type ButtonProps = Omit<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  'value'
> &
  Props;

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'filled',
      size = 'm',
      type = 'button',
      icon,
      children,
      className,
      loading,
      loadingText,
      delay = 300,
      onClick,
      ...props
    },
    ref
  ) => {
    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      if (loading) {
        e.preventDefault();
        return;
      }
      if (onClick) {
        onClick(e);
      }
    };    
    
    return (
      <button
        ref={ref}
        type={type}
        className={clsx(
          styles.button,
          styles[`button-variant-${variant}`],
          styles[`button-size-${size}`],
          className,
          {
            [styles['only-icon']]: icon && typeof children === 'undefined',
          }
        )}
        onClick={handleClick}
        {...props}
      >
        {icon && <span className={styles.icon}>{icon}</span>}
        {loadingText ? loadingText : children}        
      </button>
    );
  }
);

Button.displayName = 'Button';

export default Button;
