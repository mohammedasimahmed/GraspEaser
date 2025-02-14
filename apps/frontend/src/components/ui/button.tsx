import clsx from 'clsx';
import React, { ButtonHTMLAttributes } from 'react'

const baseClass = 'px-3 py-1 text-sm lg:px-5 lg:py-2 lg:text-medium rounded-lg font-medium outline-none';

const variants = {
  'primary': 'bg-violet-600 hover:bg-violet-700 text-white border-2 border-violet-600 hover:bg-violet-700',
  'unselected': 'border-2 border-black text-black',
  'submit': 'bg-blue-700 text-white hover:bg-blue-800 lg:text-medium',
  'secondary': 'bg-blue-700 hover:bg-blue-800 text-white border-2 border-blue-700 hover:bg-blue-800'
};

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: keyof typeof variants;
};

const Button: React.FC<ButtonProps> = ({
  children,
  variant='primary',
  ...props
}) => {
  return (
    <button className={`${clsx(baseClass, variants[variant], props.className)}`} {...props}>
      {children}
    </button>
  )
}

export default Button