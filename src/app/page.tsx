import { Button } from "@/components/ui/Button";

export default function Home() {
  return (
    <main 
      className="flex flex-col gap-4 items-center justify-center p-4 sm:p-8 shadow" 
      role="main"
      aria-label="Main content of the homepage"
    >
      <h1>Loan Tokenization Dashboard</h1>
      <p>This is a dashboard for managing and visualizing loan tokenization processes.</p>
      <p>Feel free to explore the features!</p>
      <div className="flex flex-wrap gap-4 justify-center mt-4">
        <Button
          href="/profile"
          ariaLabel="Go to Profile page for user details"
        >
          Profile
        </Button>
        <Button
          href="/upload"
          ariaLabel="Go to Upload page for uploading documents"
        >
          Upload
        </Button>
        <Button
          href="/dashboard"
          ariaLabel="Go to Dashboard page for user insights"
        >
          Dashboard
        </Button>
      </div>
    </main>
  );
}
