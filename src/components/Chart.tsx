import React from 'react';
import styles from './Chart.module.css';

interface ChartProps {
    variant?: 'primary' | 'secondary' | 'tertiary';
    size?: 'small' | 'medium' | 'large';
    disabled?: boolean;
    className?: string;
    children?: React.ReactNode;
    onClick?: (event: React.MouseEvent<HTMLElement>) => void;
}

export const Chart: React.FC<ChartProps> = ({ 
    variant = 'primary',
    size = 'medium',
    disabled = false,
    className,
    children,
    onClick 
}) => {
    const baseClass = styles.container;
    const variantClass = styles[variant];
    const sizeClass = styles[size];
    
    return (
        <div 
            className={`${baseClass} ${variantClass} ${sizeClass} ${className}`}
            onClick={disabled ? undefined : onClick}
            aria-disabled={disabled}
        >
            {children}
        </div>
    );
};