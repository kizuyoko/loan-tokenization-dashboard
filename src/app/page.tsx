import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";

export default function Home() {
  return (
    <main 
      className="flex flex-col items-center justify-center gap-4 p-4 shadow sm:p-8" 
      role="main"
      aria-label="Main content of the homepage"
    >
      <h1>Loan Tokenization Dashboard</h1>
      <p>This is a demo site, created for showcasing loan tokenization features.</p>
      <form 
        className="flex flex-col items-center w-full max-w-sm gap-4 mt-2" 
        aria-label="Login form"
      >
        <Input
          type="text"
          placeholder="Username"
        />
        <Input
          type="password"
          placeholder="Password"
        />
        <Button
          href="/dashboard"
          ariaLabel="Go to Dashboard page for user insights"
        >
          Login
        </Button>
      </form>
    </main>
  );
}
