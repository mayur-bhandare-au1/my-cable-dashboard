import React from 'react';
import Label from './Label'; // Assuming Label is in the same ui folder

const Checkbox = ({ id, checked, onCheckedChange, children, className = '' }) => {
    return (
        <div className={`flex items-center space-x-2 ${className}`}>
            <input
                type="checkbox"
                id={id}
                checked={checked}
                onChange={(e) => onCheckedChange(e.target.checked)}
                className="h-4 w-4 rounded border border-primary text-primary focus:ring-primary disabled:cursor-not-allowed disabled:opacity-50"
            />
            {children && <Label htmlFor={id}>{children}</Label>}
        </div>
    );
};

export default Checkbox;
