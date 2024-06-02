"use client";
import { z } from "zod";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Form,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { UseFormReturn } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { schema } from "../schema/create-schema";
import MultipleSelector, { Option } from "@/components/ui/multiple-selector";
import { useFindManyUser } from "@/lib/hooks";

type Props = {
  form: UseFormReturn<z.infer<typeof schema>>;
  onSubmit: (values: z.infer<typeof schema>) => void;
};

// const OPTIONS: Option[] = [
//   { label: "nextjs", value: "Nextjs" },
//   { label: "Vite", value: "vite", disable: true },
//   { label: "Nuxt", value: "nuxt", disable: true },
//   { label: "Vue", value: "vue, disable: true", disable: true },
//   { label: "Remix", value: "remix" },
//   { label: "Svelte", value: "svelte", disable: true },
//   { label: "Angular", value: "angular", disable: true },
//   { label: "Ember", value: "ember", disable: true },
//   { label: "React", value: "react" },
//   { label: "Gatsby", value: "gatsby", disable: true },
//   { label: "Astro", value: "astro", disable: true },
// ];

export const NewForm = (props: Props) => {
  const { form, onSubmit } = props;
  const { data: users, isLoading, error } = useFindManyUser();

  if (isLoading) return <p>Loading...</p>;
  const OPTIONS: Option[] =
    users?.map((user) => {
      return { label: user.name, value: user.id };
    }) || [];
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder="shadcn" {...field} />
              </FormControl>
              <FormDescription>
                This is your public display name.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="schedules"
          render={({ field }) => (
            <FormItem>
              <FormLabel>name</FormLabel>
              <FormControl>
                <MultipleSelector
                  {...field}
                  defaultOptions={OPTIONS}
                  placeholder="Select frameworks you like..."
                  emptyIndicator={
                    <p className="text-center text-lg leading-10 text-gray-600 dark:text-gray-400">
                      no results found.
                    </p>
                  }
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
};
