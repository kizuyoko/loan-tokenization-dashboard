import { Button } from "@/components/ui/Button";

export default function Home() {
  return (
    <main 
      className="flex flex-col items-center justify-center gap-4 p-4 shadow sm:p-8" 
      role="main"
      aria-label="Main content of the homepage"
    >
      <h1>Loan Tokenization Dashboard</h1>
      <p>This is a demo site, created for showcasing loan tokenization features.</p>
     <div className="flex flex-col justify-center w-full gap-2 sm:items-center sm:flex-row">
        <Button href="/dashboard">Dashboard</Button>
        <Button href="/profile">Profile</Button>
        <Button href="/upload">Upload</Button>
      </div>
    </main>
  );
}
