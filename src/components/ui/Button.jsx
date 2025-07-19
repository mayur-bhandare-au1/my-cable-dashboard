import React from 'react';

const Button = ({ children, onClick, variant = 'default', size = 'default', className = '', type = 'button', disabled = false }) => {
    const baseStyle = 'inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50';
    const variants = {
        default: 'bg-blue-600 text-white hover:bg-blue-700',
        destructive: 'bg-red-600 text-white hover:bg-red-700',
        outline: 'border border-input bg-background hover:bg-accent hover:text-accent-foreground',
        secondary: 'bg-gray-200 text-gray-900 hover:bg-gray-300',
        ghost: 'hover:bg-accent hover:text-accent-foreground',
        link: 'text-blue-600 underline-offset-4 hover:underline',
    };
    const sizes = {
        default: 'h-10 px-4 py-2',
        sm: 'h-9 rounded-md px-3',
        lg: 'h-11 rounded-md px-8',
        icon: 'h-10 w-10',
    };

    return (
        <button
            type={type}
            onClick={onClick}
            className={`${baseStyle} ${variants[variant]} ${sizes[size]} ${className}`}
            disabled={disabled}
        >
            {children}
        </button>
    );
};

export default Button;
