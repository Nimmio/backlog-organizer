import { LoginForm } from "@/components/loginForm/login-form";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login",
  description: "Backlog Organizer Login",
};

export default function Page() {
  const signupDisabled = process.env.DISABLE_SIGNUP === "TRUE";

  return (
    <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm">
        <LoginForm canSignup={!signupDisabled} />
      </div>
    </div>
  );
}
