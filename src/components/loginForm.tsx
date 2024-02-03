"use client";

import React from "react";
import { Form, FormControl, FormField, FormItem, FormLabel } from "./ui/form";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { LoginRequestSchema } from "@/models/loginRequestSchema";
import { SubmitHandler, useForm } from "react-hook-form";

export const LoginForm = () => {
  const form = useForm<LoginRequestSchema>({
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<LoginRequestSchema> = (data) => console.log(data);

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder="username" {...field} />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Passowrd</FormLabel>
              <FormControl>
                <Input placeholder="password" {...field} />
              </FormControl>
            </FormItem>
          )}
        />
        <Button type="submit" variant="outline">
          Submit
        </Button>
      </form>
    </Form>
  );
};
