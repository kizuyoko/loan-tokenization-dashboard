  //Profile contains: Name, Country, Founding Year, Total Portfolio, Credit Risk Score, Product Type (Mortgage/Private/Business), Website URL, Contacts API Endpoint: create-profile (profile)
import { Metadata } from "next";
import { ProfileForm } from "@/components/ProfileForm";

export const metadata: Metadata = { 
  title: "User Profile",
  description: "View and edit your profile information here.",
};

export default function ProfilePage() {
  return (
    <main className="flex flex-col gap-4 items-center justify-center p-4 sm:p-8 shadow">
      <h1>User Profile</h1>
      <p>View and edit your profile information here.</p>
      <ProfileForm />
    </main>
  );
}
