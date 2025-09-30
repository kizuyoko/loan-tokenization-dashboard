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

  const [touched, setTouched] = useState<{ [key: string]: boolean }>({});

  const requiredFields: (keyof Profile)[] = [
    "name",
    "country",
    "foundingYear",
    "totalPortfolio",
    "creditRiskScore",
    "productType",
    "websiteUrl",
    "contacts",
  ];

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLSelectElement>) => {
    setTouched((prev) => ({ ...prev, [e.target.name]: true }));
  }
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setProfile((prev: Profile) => ({ ...prev, [name]: value }));
    console.log(`Changed ${name} to ${value}`);
  }
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({...profile});
    handleReset();
  }

  const handleReset = () => {
    setProfile(Object.fromEntries(Object.keys(profile).map((k) => [k, ""])) as Profile);
    setTouched({});
  };

  const isValid = requiredFields.every((field) => profile[field].trim() !== "");

  
  const getError = (field: keyof Profile) => {
    if (!touched[field]) return "";
    if (requiredFields.includes(field) && profile[field].trim() === "") {
      return field === "productType" ? "Select a product type" : `${field} is required`;
    }
    return "";
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col w-full max-w-md gap-4">
      <Input type="text" name="name" placeholder="Name" value={profile.name} onChange={handleChange} onBlur={handleBlur} hasError={!!getError("name")} />
      <Input type="text" name="country" placeholder="Country" value={profile.country} onChange={handleChange} onBlur={handleBlur} hasError={!!getError("country")} />
      <Input type="text" name="foundingYear" placeholder="Founding Year" value={profile.foundingYear} onChange={handleChange} onBlur={handleBlur} hasError={!!getError("foundingYear")} />
      <Input type="text" name="totalPortfolio" placeholder="Total Portfolio" value={profile.totalPortfolio} onChange={handleChange} onBlur={handleBlur} hasError={!!getError("totalPortfolio")} />
      <Input type="text" name="creditRiskScore" placeholder="Credit Risk Score" value={profile.creditRiskScore} onChange={handleChange} onBlur={handleBlur} hasError={!!getError("creditRiskScore")} />
      <Select
        name="productType"
        label="Product Type"
        onChange={handleChange}
        onBlur={handleBlur} 
        value={profile.productType}
        hasError={!!getError("productType")}
        options={[
          { value: "", label: "Select product type" },
          { value: "Mortgage", label: "Mortgage" },
          { value: "Private", label: "Private" },
          { value: "Business", label: "Business" },
        ]}
      />
      <Input type="text" name="websiteUrl" placeholder="Website URL" value={profile.websiteUrl} onChange={handleChange} onBlur={handleBlur} hasError={!!getError("websiteUrl")} />
      <Input type="text" name="contacts" placeholder="Contacts" value={profile.contacts} onChange={handleChange} onBlur={handleBlur} hasError={!!getError("contacts")} />
      <div className="flex justify-end gap-2">
      <Button type="reset" onClick={handleReset}>Clear</Button>
      <Button type="submit" className="btn-primary" disabled={!isValid}>Save Profile</Button></div>
    </form>
  );
};
