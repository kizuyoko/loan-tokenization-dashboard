import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  hasError?: boolean;
  ariaLabel?: string;
  className?: string;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, hasError, ariaLabel, ...props }, ref) => {
    return (
      <div className={`input-container ${className}`}>
        <label className={`label ${hasError ? "error-text" : ""}`}>{props.placeholder}</label>
        <input
          ref={ref}
          className={`input-select  ${hasError ? "border-red-500" : "border-gray-300"} ${className}`}
          aria-label={ariaLabel || props.placeholder}
          {...props}
        />
      </div>
    );
  }
);

Input.displayName = "Input";
