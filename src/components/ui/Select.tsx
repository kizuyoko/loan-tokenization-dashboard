import React from "react";

interface Option {
  value: string;
  label: string;
}
interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  options: Option[];
  hasError?: boolean; 
}


export const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({ className, label, options, hasError, ...props }, ref) => {
    return (
      <div className={`input-container ${className}`}>
        {label && <label className={`label ${hasError ? "error-text" : ""}`}>{label}</label>}
        <select
          ref={ref}
          className={`input-select ${className} ${hasError ? "border-red-500" : "border-gray-300"}`}
          {...props}
        >
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
    );
  }
);

Select.displayName = "Select";
