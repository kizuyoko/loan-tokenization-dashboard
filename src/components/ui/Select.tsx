import React from "react";

interface Option {
  value: string;
  label: string;
}
interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  options: Option[];
  hasError?: boolean; 
  success?: boolean;
  placeholder?: string;
}


export const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({ label, options, hasError, success, ...props }, ref) => {
    return (
      <div className={`input-container`}>
        <label htmlFor={props.name} className={`label ${hasError ? "error-text" :success ? "success-text" : ""}`}>{label}</label>
        <select
          id={props.name}
          name={props.name}
          ref={ref}
          className={`input-select ${hasError ? "error-border" : success ? "success-border" : "input-border"}`}
          {...props}
          aria-label={label || props.placeholder}
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
