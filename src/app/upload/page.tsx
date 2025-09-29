import { Metadata } from "next";
import { UploadForm } from "@/components/UploadForm";

export const metadata: Metadata = {
  title: "Upload Documents",
  description: "Upload your documents for loan tokenization.",
};

export default function UploadPage() {
  return (
    <main className="flex flex-col gap-4 items-center justify-center p-4 sm:p-8 shadow">
      <h1>Upload Documents</h1>
      <p>Use the form below to upload your documents for loan tokenization.</p>
      <UploadForm />
    </main>
  );
}
