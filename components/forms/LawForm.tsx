"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormField,
  FormControl,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";
import { useCreateLaw } from "@/lib/query/queries";
import { useState, useEffect } from "react";
import { LawDataType } from "@/typings";

const formSchema = z.object({
  title: z.string().min(3, {
    message: "Title must be at least 3 characters.",
  }),
  description: z.string().min(10, {
    message: "Description must be at least 10 characters.",
  }),
  topics: z.array(z.string()),
});

const LawForm = ({ lawData }: { lawData: LawDataType }) => {
  const { mutateAsync: createLaw, isPending: isCreating } = useCreateLaw();
  const router = useRouter();
  const [topics, setTopics] = useState("");

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      description: "",
      topics: [],
    },
  });

  useEffect(() => {
    if (lawData) {
      form.setValue("title", lawData.newTitle);
      form.setValue("description", lawData.description);
      setTopics(lawData.topics.join(", "));
    }
  }, [lawData, form]);

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const slug = values.title.toLowerCase().split(" ").join("-");
    const lawDataToSubmit = {
      newTitle: values.title,
      description: values.description,
      slug,
      topics: topics
        .split(",")
        .map((item) => item.trim())
        .filter((item) => item.length > 0),
    };
    await createLaw(lawDataToSubmit);
    router.push("/laws");
  }

  return (
    <div className="flex items-center justify-center p-6">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Title</FormLabel>
                <FormControl>
                  <Input placeholder="Title" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Description</FormLabel>
                <FormControl>
                  <Input placeholder="Description" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormItem>
            <FormLabel>Topics</FormLabel>
            <FormControl>
              <Input
                placeholder="topic1, topic2, topic3"
                value={topics}
                onChange={(e) => setTopics(e.target.value)}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
          <Button type="submit" disabled={isCreating}>
            {isCreating ? "Creating..." : "Create Law"}
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default LawForm;
