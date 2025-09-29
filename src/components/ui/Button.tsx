// src/components/Button.tsx
import React from "react";
import Link from "next/link";

type ButtonProps = {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
  ariaLabel?: string;
  type?: "button" | "submit" | "reset";
};

export const Button = ({
  children,
  href,
  onClick,
  className = "",
  ariaLabel,
  type,
  ...props
}: ButtonProps) => {

  if (href) {
    return (
      <Link 
        href={href} 
        className={`button ${className}`}
        aria-label={ariaLabel}
        {...props}
      >
        {children}
      </Link>
    );
  }

  return (
    <button 
      onClick={onClick} 
      className={`button ${className}`} 
      type={type || "button"}
      {...props}
    >
      {children}
    </button>
  );
};
