import { Dashboard } from "@/components/Dashboard";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "User Dashboard",
  description: "View your loan tokenization progress and insights here."
};

export default function DashboardPage() {
  return (
    <main className="flex flex-col gap-4 items-center justify-center p-4 sm:p-8 shadow">
      <h1>Dashboard</h1>
      <p>Summary of loans and investments (mock data)</p>
      <Dashboard />
    </main>
  );
}
