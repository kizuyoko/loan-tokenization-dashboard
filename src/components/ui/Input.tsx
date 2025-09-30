import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  hasError?: boolean;
  ariaLabel?: string;
  className?: string;
  success?: boolean;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, hasError, ariaLabel, success, ...props }, ref) => {
    return (
      <div className={`input-container ${className}`}>
        <label className={`label ${hasError ? "error-text" : ""} ${success ? "success-text" : ""}`}>{props.placeholder}</label>
        <input
          ref={ref}
          className={`input-select  ${hasError ? "border-red-500 border-2" : "border-gray-300"} ${success ? "border-green-500 border-2" : ""} ${  className}`}
          aria-label={ariaLabel || props.placeholder}
          {...props}
        />
      </div>
    );
  }
);

Input.displayName = "Input";
