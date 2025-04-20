"use server";

import { auth } from "@/auth";

interface signInParams {
  email: string;
  password: string;
}

const signIn = async (params: signInParams): Promise<boolean> => {
  const { email, password } = params;
  return (
    (
      await auth.api.signInEmail({
        body: {
          email,
          password,
        },
        asResponse: true,
      })
    ).status === 200
  );
};

export default signIn;
