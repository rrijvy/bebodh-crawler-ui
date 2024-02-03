"use client";

import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Button } from "./ui/button";
import { Form, FormField, FormItem, FormLabel, FormControl } from "./ui/form";
import { Input } from "./ui/input";
import { RegisterRequestSchema } from "@/models/registerRequestSchema";

export const RegisterForm = () => {
  const form = useForm<RegisterRequestSchema>({
    defaultValues: {
      email: "",
      password: "",
      firstName: "",
      lastName: "",
    },
  });

  const onSubmit: SubmitHandler<RegisterRequestSchema> = (data) => console.log(data);

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="firstName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>First Name</FormLabel>
              <FormControl>
                <Input placeholder="first name" {...field} />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="lastName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Last Name</FormLabel>
              <FormControl>
                <Input placeholder="last name" {...field} />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="email" {...field} />
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
