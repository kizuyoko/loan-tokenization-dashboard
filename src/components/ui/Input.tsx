import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string; 
  label?: string;             
  hasError?: boolean;
  success?: boolean;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ name, label, type = "text", hasError, success, ...props }, ref) => {
    const placeholder = props.placeholder || label || name;
    
    return (
      <div className={`input-container`}>
        <label
          htmlFor={name}
          className={`label ${hasError ? "error-text" : success ? "success-text" : ""}`}
        >
          {label || placeholder}
        </label>
        <input
          id={name}
          name={name}
          ref={ref}
          type={type}
          placeholder={placeholder}
          className={`input-select ${
            hasError ? "error-border" : success ? "success-border" : "input-border"
          }`}
          {...props}
        />
      </div>
    );
  }
);

Input.displayName = "Input";
