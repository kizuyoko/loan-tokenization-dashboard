"use client";

import { useState } from "react";
import { Profile } from "@/app/types/profile";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Select } from "@/components/ui/Select";

export const ProfileForm = () => {
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
    setProfile((prev: Profile) => ({ ...prev, [name]: value }));
    console.log(`Changed ${name} to ${value}`); // Debug alert
  }
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({...profile});
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full max-w-md">
      <Input type="text" name="name" placeholder="Name" onChange={handleChange} />
      <Input type="text" name="country" placeholder="Country" onChange={handleChange} />
      <Input type="text" name="foundingYear" placeholder="Founding Year" onChange={handleChange} />
      <Input type="text" name="totalPortfolio" placeholder="Total Portfolio" onChange={handleChange} />
      <Input type="text" name="creditRiskScore" placeholder="Credit Risk Score" onChange={handleChange} />
      <Select
        name="productType"
        label="Product Type"
        onChange={handleChange}
        options={[
          { value: "Mortgage", label: "Mortgage" },
          { value: "Private", label: "Private" },
          { value: "Business", label: "Business" },
        ]}
      />
      <Input type="text" name="websiteUrl" placeholder="Website URL" onChange={handleChange} />
      <Input type="text" name="contacts" placeholder="Contacts" onChange={handleChange} />
      <Button type="submit" className="btn-primary">Save Profile</Button>
    </form>
  );
};
