  //Profile contains: Name, Country, Founding Year, Total Portfolio, Credit Risk Score, Product Type (Mortgage/Private/Business), Website URL, Contacts API Endpoint: create-profile (profile)

"use client";
import { useState } from "react";
import { Profile } from "../types/profile";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";

export default function ProfilePage() {
  const [profile, setProfile] = useState<Profile>({
    name: "",
    country: "",
    foundingYear: "",
    totalPortfolio: "",
    creditRiskScore: "",
    productType: "",
    websiteUrl: "",
    contacts: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setProfile((prev) => ({ ...prev, [name]: value }));
    console.log(`Changed ${name} to ${value}`); // Debug alert
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Profile saved (not really, this is a placeholder).");
  }

  return (
    <main className="flex flex-col gap-4 items-center justify-center p-4 sm:p-8 shadow">
      <h1>User Profile</h1>
      <p>View and edit your profile information here.</p>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full max-w-md">
        <Input type="text" name="name" value={profile.name} onChange={handleChange} placeholder="Name" />
        <Input type="text" name="country" value={profile.country} onChange={handleChange} placeholder="Country" />
        <Input type="text" name="foundingYear" value={profile.foundingYear} onChange={handleChange} placeholder="Founding Year" />
        <Input type="text" name="totalPortfolio" value={profile.totalPortfolio} onChange={handleChange} placeholder="Total Portfolio" />
        <Input  type="text" name="creditRiskScore" value={profile.creditRiskScore} onChange={handleChange} placeholder="Credit Risk Score" />
        <div className="flex items-center">
          <label className="w-32 mr-2 text-right">Product Type</label>
          <select 
            name="productType" 
            value={profile.productType} 
            onChange={handleChange}
            className="border border-gray-300 rounded px-2 py-1 flex-1"
          >
            <option value="">Select Product Type</option>
            <option value="Mortgage">Mortgage</option>
            <option value="Private">Private</option>
            <option value="Business">Business</option>
          </select>
        </div>  
        <Input type="text" name="websiteUrl" value={profile.websiteUrl} onChange={handleChange} placeholder="Website URL" />
        <Input type="text" name="contacts" value={profile.contacts} onChange={handleChange} placeholder="Contacts" />
        <Button type="submit" className="btn-primary">Save Profile</Button>
      </form>
    </main>
  );
}
