"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Button } from "../ui/button";
import { UserSettings } from "@/generated/prisma";
import {
  cleanDB,
  upsertSettings,
} from "@/app/(withNavigation)/user/settings/actions";
import { useTheme } from "next-themes";

interface UserSettingsFormProps {
  settings: UserSettings | null;
  userId: string;
}

const UserSettingsForm = (props: UserSettingsFormProps) => {
  const { settings, userId } = props;
  const { setTheme } = useTheme();
  const formSchema = z.object({
    theme: z.enum(["LIGHT", "DARK", "SYSTEM"]),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      theme: settings?.theme || "SYSTEM",
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    const { theme } = values;
    setTheme(theme.toLowerCase());
    upsertSettings({ settings: values, userId });
  };

  return (
    <>
      <Button variant="destructive" onClick={() => cleanDB()}>
        Nuke All
      </Button>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <FormField
            control={form.control}
            name="theme"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Theme</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a verified email to display" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="SYSTEM">System</SelectItem>
                    <SelectItem value="LIGHT">Light</SelectItem>
                    <SelectItem value="DARK">Dark</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button className="mt-4">Submit</Button>
        </form>
      </Form>
    </>
  );
};

export default UserSettingsForm;
