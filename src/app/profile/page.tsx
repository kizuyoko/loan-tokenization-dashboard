  //Profile contains: Name, Country, Founding Year, Total Portfolio, Credit Risk Score, Product Type (Mortgage/Private/Business), Website URL, Contacts API Endpoint: create-profile (profile)
import { Metadata } from "next";
import { ProfileForm } from "@/components/ProfileForm";

export const metadata: Metadata = { 
  title: "User Profile",
  description: "View and edit your profile information here.",
};

export default function ProfilePage() {
  return (
    <main className="flex flex-col items-center justify-center w-full max-w-xl gap-4 p-4 shadow sm:p-8" role="main" aria-label="Dashboard main content">
      <h1>User Profile</h1>
      <p>You can create your profile here.</p>
      <ProfileForm />
    </main>
  );
}
