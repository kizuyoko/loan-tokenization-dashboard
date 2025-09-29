"use client"
import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Input } from "./ui/Input";

export const UploadForm = () => {
  const [file, setFile] = useState<File | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0] || null;
    setFile(selectedFile);
  };

  const handleUpload = (e: React.FormEvent) => {
    e.preventDefault();
    if (file) {
      console.log("Uploading:", file.name);
      // Handle file upload logic here
    }
  };

  return (
    <form onSubmit={handleUpload} className="flex flex-col gap-4">
      <Input type="file" placeholder="Choose a file" accept=".csv" onChange={handleFileChange} />
      {file && <p className="text-lg text-blue-800 font-bold">Selected file: {file.name}</p>}
      <Button type="submit" className="btn-primary">Upload</Button>
    </form>
  );
};