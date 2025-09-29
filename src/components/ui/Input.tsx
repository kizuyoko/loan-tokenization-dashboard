import React from "react";

export const Input = React.forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>(
  ({ className, ...props }, ref) => {
    return (
      <div className={`flex items-center ${className}`}>
        <label className="w-32 mr-2 text-right">{props.placeholder}</label>
        <input
          ref={ref}
          className={`border border-gray-300 rounded px-2 py-1 flex-1 ${className}`}
          {...props}
        />
      </div>
    );
  }
);

Input.displayName = "Input";
