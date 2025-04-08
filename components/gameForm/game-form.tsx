"use client";

import { zodResolver } from "@hookform/resolvers/zod";
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
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { useRouter } from "next/navigation";
import { Game } from "@/generated/prisma";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import FormDatePicker, {
  DatePickerWithClear,
  DatePickerWithClearFormItem,
} from "../date-picker/date-picker";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  platform: z.string().min(2, {
    message: "Platform must be at least 2 characters.",
  }),
  status: z.enum([
    "WANT_TO_BUY",
    "PREORDER",
    "TO_PLAY",
    "PLAYING",
    "COMPLETED",
    "DROPPED",
  ]),
  genre: z.string().min(2, {
    message: "Platform must be at least 2 characters.",
  }),
  releaseDate: z.date().nullable(),
});

export interface GameFormProps {
  name?: string;
  platform?: string;
  status?:
    | "WANT_TO_BUY"
    | "PREORDER"
    | "TO_PLAY"
    | "PLAYING"
    | "COMPLETED"
    | "DROPPED";
  genre?: string;
  releaseDate?: Date;
  onSubmit: (values: Omit<Game, "id">) => void;
}

const GameForm = (props: GameFormProps) => {
  const {
    onSubmit: _onSubmit,
    name = "",
    platform = "",
    status = "TO_PLAY",
    genre = "",
    releaseDate = null,
  } = props;
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name,
      platform,
      status,
      genre,
      releaseDate,
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    _onSubmit(values);
  }

  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input placeholder="Name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="platform"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Platform</FormLabel>
                <FormControl>
                  <Input placeholder="Platform" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="status"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Status</FormLabel>
                <FormControl>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <SelectTrigger className="w-full">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="WANT_TO_BUY">Want to buy</SelectItem>
                      <SelectItem value="PREORDER">Preorder</SelectItem>
                      <SelectItem value="TO_PLAY">To play</SelectItem>
                      <SelectItem value="PLAYING">Playing</SelectItem>
                      <SelectItem value="COMPLETED">Completed</SelectItem>
                      <SelectItem value="DROPPED">Dropped</SelectItem>
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="genre"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Genre</FormLabel>
                <FormControl>
                  <Input placeholder="Genre" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormDatePicker
            name="releaseDate"
            label="Release Date"
            placeholder="Select the Release Date"
            modal
          />

          <Button type="submit">Submit</Button>
        </form>
      </Form>
    </div>
  );
};

export default GameForm;
