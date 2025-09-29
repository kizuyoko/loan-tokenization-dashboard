import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <main className="flex flex-col gap-4 items-center justify-center p-4 sm:p-8 shadow">
      <h1>404 - Not Found</h1>
      <p>The page you are looking for does not exist.</p>
      <Button
        href="/"
        ariaLabel="Go back to Home page"
      >
        Home
      </Button>
    </main>
  )
}
