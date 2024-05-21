"use client"
import React, { useState } from 'react';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import Cookies from 'js-cookie';
import { Button } from '@/components/ui/button';
import axios from 'axios';

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Input } from '@/components/ui/input';
import Link from 'next/link';
import Logo from '../app/Logo';
import { useRouter } from 'next/navigation';
const SignUpPage = () => {
  const router = useRouter();

  const [signUpError, setSignUpError] = useState("");

  const formSchema = z.object({
    name: z.string().min(1, {
      message: "Name is required!",
    }),
    email: z.string().email({
      message: "Invalid email address!",
    }),
    password: z.string().min(6, {
      message: "Password must be at least 6 characters long!",
    }),
    confirmPassword: z.string().min(6, {
      message: "Confirm password must be at least 6 characters long!",
    })
  }).refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match!",
    path: ["confirmPassword"],
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: ""
    },
  })

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      // Send a POST request to the FastAPI backend
      const response = await axios.post(`${process.env.backend_url}/user/signup`, {
        name: values.name,
        email: values.email,
        password: values.password,
      });

      if (response.data.access_token) {
        Cookies.set('access_token', response.data.access_token);
        router.push('/app');
      }
      else {
        setSignUpError('Sign Up failed!');
      }
    } catch (error: any) {
      console.error(error);
      setSignUpError(error.response?.data?.detail || 'Sign Up failed!');
    }
  }


  return (
    <main>
      <div>
        <Link href='/' className='p-4 pb-2'>
          <Logo />
        </Link>
      </div>

      <div className="flex items-center justify-center min-h-[90vh] relative">
        <div className="space-y-20 z-10">
          <h1 className="text-5xl font-bold">Sign Up to Rapid Pass</h1>

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
                        <Input type="text" placeholder="Name" {...field} />
                      </FormControl>
                      <FormMessage />
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
                        <Input type="email" placeholder="Email" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Password</FormLabel>
                      <FormControl>
                        <Input type="password" placeholder="Password" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="confirmPassword"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Confirm Password</FormLabel>
                      <FormControl>
                        <Input type="password" placeholder="Confirm Password" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {signUpError && (
                  <div className="text-sm text-red-600">{signUpError}</div>
                )}

                <Button type="submit">Submit</Button>
              </form>
            </Form>


            <p className="text-sm text-gray-500 mt-8">
              Already have an account?{' '}
              <Link
                href="/sign-in"
                className="text-blue-500 underline"
              >
                Sign In
              </Link>
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}

export default SignUpPage