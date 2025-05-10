"use client";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "../ui/form";
import signIn from "@/app/(withoutNavigation)/sign-in/actions";
import { toast } from "sonner";
import { ApiError } from "next/dist/server/api-utils";

export function LoginForm({
  className,
  canSignup,
  demoMode,
  ...props
}: React.ComponentPropsWithoutRef<"div"> & {
  canSignup: boolean;
  demoMode: boolean;
}) {
  const router = useRouter();
  const formSchema = z.object({
    email: z.string().email().min(5),
    password: z.string().min(8),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    const { email, password } = values;
    signIn({ email, password }).then((error) => {
      if (error && error instanceof ApiError) toast(error.message);

      if (!error) {
        toast("Login successful");
        router.push("/");
      }
    });
  };

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">Login</CardTitle>
          <CardDescription>
            Enter your email below to login to your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <div className="flex flex-col gap-6">
                <div className="grid gap-2">
                  <Label htmlFor="email">Email</Label>
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input id="email" placeholder="Email" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="grid gap-2">
                  <div className="flex items-center">
                    <Label htmlFor="password">Password</Label>
                  </div>
                  <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input
                            type="password"
                            id="password"
                            placeholder="Password"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <Button type="submit" className="w-full">
                  Login
                </Button>
              </div>
              {canSignup && (
                <div className="mt-4 text-center text-sm">
                  Don&apos;t have an account?{" "}
                  <Link href="sign-up" className="underline underline-offset-4">
                    Sign up
                  </Link>
                </div>
              )}
              {demoMode && (
                <div className="mt-4 text-sm ml-16">
                  Demo Login:
                  <p>
                    <span className="inline-block min-w-[68]">E-Mail:</span>{" "}
                    demo@demo.com
                  </p>
                  <p>
                    <span className="inline-block min-w-[68]">Password:</span>{" "}
                    demodemo
                  </p>
                </div>
              )}
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}
