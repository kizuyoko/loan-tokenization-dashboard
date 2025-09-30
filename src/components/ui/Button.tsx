// src/components/Button.tsx
import React from "react";
import Link from "next/link";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
  href?: string;
  ariaLabel?: string;
  small?: boolean;
};

export const Button = (allProps: ButtonProps) => {
  const { children, href, className = "", ariaLabel, onClick, type, small, ...rest } = allProps;

  // If href is provided we render a Next.js Link. Only pass anchor-safe props.
  if (href) {
    const anchorProps: React.AnchorHTMLAttributes<HTMLAnchorElement> = {};
    // pick a few common anchor props from rest if present
  const maybe = rest as Partial<React.AnchorHTMLAttributes<HTMLAnchorElement>>;
  if (maybe.target) anchorProps.target = maybe.target;
  if (maybe.rel) anchorProps.rel = maybe.rel;

    return (
      <Link href={href} className={`${small ? "small-button" : "button"} ${className}`} aria-label={ariaLabel} {...anchorProps}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={`${small ? "small-button" : "button"} ${className}`} type={type || "button"} aria-label={ariaLabel} {...rest}>
      {children}
    </button>
  );
};
