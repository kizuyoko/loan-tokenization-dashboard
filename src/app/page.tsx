import { Button } from "@/components/ui/Button";

export default function Home() {
  return (
    <main 
      className="flex flex-col gap-4 items-center justify-center p-4 sm:p-8 shadow" 
      role="main"
      aria-label="Main content of the homepage"
    >
      <h1>Boilerplate React Next.js TypeScript TailwindCSS</h1>
      <p>This is very easy and simple starter set of React.js, Next.js, TypeScript, and TailwindCSS.</p>
      <p>Feel free to copy and use it!</p>
      <Button
        href="/about"
        ariaLabel="Go to About page for site details"
      >
        About
      </Button>
    </main>
  );
}
