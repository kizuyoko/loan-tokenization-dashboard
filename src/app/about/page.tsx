import { Button } from "@/components/ui/Button";

export const metadata = {
  title: "About - Boilerplate",
  description: "Learn more about this boilerplate project.",
};

export default function Home() {
  return (
    <main className="flex flex-col gap-4 items-center justify-center p-4 sm:p-8 shadow">
      <h1>About</h1>
      <p>This is About Page.</p>
      <Button
        href="/"
        ariaLabel="Go back to Home page"
      >
        Home
      </Button>
    </main>
  );
}
