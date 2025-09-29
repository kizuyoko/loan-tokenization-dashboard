import Link from "next/link";
import { siteConfig } from "@/app/constants/site";

export const Header = () => {
  return (
    <header className="flex items-center justify-center gap-6">
      {
        siteConfig.nav.map(item => (
          <Link 
            key={item.name}
            href={item.href} 
            className="text-link"
            aria-label={`Go to ${item.name} page`}>
              {item.name}
          </Link>
        ))
      }
    </header>
  );
}