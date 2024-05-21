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
import { Button } from '@/components/ui/button';
import axios from 'axios';
import Cookies from 'js-cookie';
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Input } from '@/components/ui/input';
import Link from 'next/link';
import Logo from '../app/Logo';
import { useRouter } from 'next/navigation';
const SignInPage = () => {
    const router = useRouter();

    const [loginError, setLoginError] = useState("");
    const formSchema = z.object({
        email: z.string().email({
            message: "Invalid email address!",
        }),
        password: z.string().min(6, {
            message: "Password must be at least 6 characters long!",
        }),
    });

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    })

    // 2. Define a submit handler.
    async function onSubmit(values: z.infer<typeof formSchema>) {
        try {
            // Send a POST request to the FastAPI backend
            const response = await axios.post(`${process.env.backend_url}/user/login`, {
                email: values.email,
                password: values.password,
            });

            if (response.data.access_token) {
                Cookies.set('access_token', response.data.access_token);
                router.push('/app');
            }
            else {
                setLoginError('Login failed!');
            }
        } catch (error: any) {
            console.error(error);
            setLoginError(error.response?.data?.detail || 'Login failed!');
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
                    <h1 className="text-5xl font-bold">Sign In to Rapid Pass</h1>

                    <div>
                        <Form {...form}>
                            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
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

                                {loginError && (
                                    <div className="text-sm text-red-600">{loginError}</div>
                                )}

                                <Button type="submit">Submit</Button>
                            </form>
                        </Form>

                        <p className="text-sm text-gray-500 mt-8">
                            Don&apos;t have an account yet?{' '}
                            <Link
                                href="/sign-up"
                                className="text-blue-500 underline"
                            >
                                Sign Up
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default SignInPage