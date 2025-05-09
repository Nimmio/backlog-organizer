"use server";

import { authClient } from "@/lib/auth-client";
import { TError } from "@/types/betterAuth";

interface SignUpParams {
  email: string;
  password: string;
  username: string;
}

interface SignUpReturn {
  data: object | null;
  error: TError | null;
}

const signUp = async (params: SignUpParams): Promise<SignUpReturn> => {
  const { email, password, username } = params;
  const { data, error } = await authClient.signUp.email({
    email,
    password,
    name: username,
  });

  return {
    data,
    error,
  };
};

export default signUp;
