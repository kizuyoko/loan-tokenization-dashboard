import React from "react";

export const Input = React.forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>(
  ({ className, ...props }, ref) => {
    return (
      <div className={`input-container ${className}`}>
        <label className="label">{props.placeholder}</label>
        <input
          ref={ref}
          className={`input-select ${className}`}
          {...props}
        />
      </div>
    );
  }
);

Input.displayName = "Input";
