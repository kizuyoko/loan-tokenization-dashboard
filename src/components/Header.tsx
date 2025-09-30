"use client";
import Link from "next/link";
import { siteConfig } from "@/app/constants/site";
import { usePathname } from "next/navigation";

export const Header = () => {
  const pathname = usePathname();

  return (
    <header className="grid items-center justify-between grid-cols-2 gap-2 p-4 sm:grid-cols-4">
      {siteConfig.nav.map((item) => {
        const isActive = pathname === item.href;
        return (
          <Link
            key={item.name}
            href={item.href}
            className={`text-center text-link ${isActive ? "underline" : ""}`}
            aria-label={`Go to ${item.name} page`}
          >
            {item.name}
          </Link>
        );
      })}
    </header>
  );
}