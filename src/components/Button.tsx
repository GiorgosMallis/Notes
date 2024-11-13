import React from 'react';
import { clsx } from 'clsx';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  children: React.ReactNode;
}

export function Button({ variant = 'primary', children, className, ...props }: ButtonProps) {
  return (
    <button
      className={clsx(
        'flex items-center justify-center px-4 py-2 rounded-md shadow-sm text-sm font-medium focus:outline-none focus:ring-2 focus:ring-offset-2',
        {
          'bg-indigo-600 text-white hover:bg-indigo-700 focus:ring-indigo-500': variant === 'primary',
          'bg-white text-gray-700 hover:bg-gray-50 focus:ring-gray-500': variant === 'secondary',
        },
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}