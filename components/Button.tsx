
import React from 'react';

interface ButtonProps {
    children: React.ReactNode;
    onClick?: () => void;
    variant?: 'primary' | 'secondary';
    className?: string;
}

export const Button: React.FC<ButtonProps> = ({ children, onClick, variant = 'primary', className = '' }) => {
    const baseStyles = 'px-6 py-3 font-semibold rounded-lg shadow-md transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2';
    const variantStyles = variant === 'primary' 
        ? 'bg-emerald-600 text-white hover:bg-emerald-700 focus:ring-emerald-500'
        : 'bg-white/80 backdrop-blur-sm border border-emerald-200 text-emerald-800 hover:bg-white focus:ring-emerald-300';
    return <button onClick={onClick} className={`${baseStyles} ${variantStyles} ${className}`}>{children}</button>;
};
