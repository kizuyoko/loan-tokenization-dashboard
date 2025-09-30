import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  hasError?: boolean;
  ariaLabel?: string;
  success?: boolean;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ hasError, ariaLabel, success, ...props }, ref) => {
    return (
      <div className={`input-container`}>
        <label htmlFor={props.name} className={`label ${hasError ? "error-text" :success ? "success-text" : ""}`} aria-label={props.placeholder}>{props.placeholder}</label>
        <input
          id={props.name}
          name={props.name}
          ref={ref}
          className={`input-select  ${hasError ? "error-border" : success ? "success-border" : "input-border"}`}
          aria-label={ariaLabel || props.placeholder}
          {...props}
        />
      </div>
    );
  }
);

Input.displayName = "Input";
