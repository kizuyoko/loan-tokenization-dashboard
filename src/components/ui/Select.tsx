import React from "react";

interface Option {
  value: string;
  label: string;
}
interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  name: string;
  label?: string;
  options: Option[];
  hasError?: boolean; 
  success?: boolean;
}


export const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({ name, label, options, hasError, success, ...props }, ref) => {
    return (
      <div className={`input-container`}>
        <label 
          htmlFor={name} 
          className={`label ${hasError ? "error-text" :success ? "success-text" : ""}`}
        >
          {label}
        </label>
        <select
          id={name}
          name={name}
          ref={ref}
          className={`input-select ${hasError ? "error-border" : success ? "success-border" : "input-border"}`}
          {...props}
          aria-label={label || name}
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
