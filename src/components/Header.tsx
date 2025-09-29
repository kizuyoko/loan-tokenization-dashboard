"use client";
import Link from "next/link";
import { siteConfig } from "@/app/constants/site";
import { usePathname } from "next/navigation";

export const Header = () => {
  const pathname = usePathname();

  return (
    <header className="flex items-center justify-center gap-6">
      {siteConfig.nav.map((item) => {
        const isActive = pathname === item.href;
        return (
          <Link
            key={item.name}
            href={item.href}
            className={`text-link ${isActive ? "underline" : ""}`}
            aria-label={`Go to ${item.name} page`}
          >
            {item.name}
          </Link>
        );
      })}
    </header>
  );
}