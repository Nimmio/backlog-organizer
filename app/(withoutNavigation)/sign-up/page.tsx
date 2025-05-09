import { SignupForm } from "@/components/signupForm/signup-form";
import { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Signup",
  description: "Backlog Organizer Signup",
};

export default function Page() {
  if (process.env.DISABLE_SIGNUP === "TRUE") {
    redirect("/signin");
  }
  return (
    <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm">
        <SignupForm />
      </div>
    </div>
  );
}
