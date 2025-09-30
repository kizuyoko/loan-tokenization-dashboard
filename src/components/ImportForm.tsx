"use client"
import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Input } from "./ui/Input";

export const ImportForm = () => {
  const [file, setFile] = useState<File | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0] || null;
    setFile(selectedFile);
  };

  const handleUpload = (e: React.FormEvent) => {
    e.preventDefault();
    if (file) {
      console.log("Importing:", file.name);
      // Handle file import logic here
    }
  };

  return (
    <form onSubmit={handleUpload} className="flex flex-col items-center gap-4" aria-label="Document upload form">
      <Input type="file" placeholder="Choose a file" accept=".csv" onChange={handleFileChange} />
      {file && <p className="text-lg font-bold text-blue-800">Selected file: {file.name}</p>}
      <Button type="submit">Import</Button>
    </form>
  );
};