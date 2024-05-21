"use client";
import Image from 'next/image'
import React, { useState } from 'react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuLabel,
    DropdownMenuRadioGroup,
    DropdownMenuRadioItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import Cookies from 'js-cookie'
import { useRouter } from 'next/navigation';


const Header = ({ title }: { title: string }) => {
    const router = useRouter();
    const [position, setPosition] = useState("");

    const handleLogOut = () => {
        // Remove the access token cookie
        Cookies.remove('access_token');

        // Optionally, redirect to the login page after logout
        router.push('/sign-in');
    }

    return (
        <header className='flex items-center justify-between gap-8 py-6'>
            <h1 className='text-3xl font-bold'>{title}</h1>

            <div>



                <div>
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Avatar className='cursor-pointer'>
                                <AvatarImage src="/avatar.png" />
                                <AvatarFallback>MR</AvatarFallback>
                            </Avatar>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="w-56">
                            <DropdownMenuLabel>More</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
                                <DropdownMenuRadioItem value="profile">Profile</DropdownMenuRadioItem>
                                <DropdownMenuRadioItem value="settings">Settings</DropdownMenuRadioItem>
                                <DropdownMenuRadioItem value="settings" onClick={handleLogOut}>Log out</DropdownMenuRadioItem>
                            </DropdownMenuRadioGroup>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            </div>

        </header>
    )
}

export default Header