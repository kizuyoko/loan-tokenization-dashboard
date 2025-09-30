import { Metadata } from "next";
import { ImportForm } from "@/components/ImportForm";

export const metadata: Metadata = {
  title: "Import Documents",
  description: "Import your documents for loan tokenization.",
};

export default function ImportPage() {
  return (
    <main className="flex flex-col items-center justify-center gap-4 p-4 shadow sm:p-8">
      <h1>Import Documents</h1>
      <p>Use the form below to import your documents for loan tokenization.</p>
      <ImportForm />
    </main>
  );
}
