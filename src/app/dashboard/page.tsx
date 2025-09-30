import { Dashboard } from "@/components/Dashboard";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "User Dashboard",
  description: "View your loan tokenization progress and insights here."
};

export default function DashboardPage() {
  return (
    <main className="flex flex-col items-center justify-center w-full max-w-5xl gap-4 p-4 shadow sm:p-8" role="main" aria-label="Dashboard main content">
      <h1>Dashboard</h1>
      <p>Summary of loans and investments (mock data)</p>
      <Dashboard />
    </main>
  );
}
