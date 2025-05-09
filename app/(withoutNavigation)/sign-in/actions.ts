"use server";

import { auth } from "@/auth";

interface signInParams {
  email: string;
  password: string;
}

const signIn = async (params: signInParams): Promise<unknown | undefined> => {
  const { email, password } = params;

  try {
    await auth.api.signInEmail({
      body: {
        email,
        password,
      },
    });
    return undefined;
  } catch (error) {
    console.log("pong");
    return error;
  }
};

export default signIn;
