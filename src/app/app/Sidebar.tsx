"use client";
import Link from 'next/link'
import React from 'react'
import sidebarItems from './SidebarItem'
import { usePathname } from 'next/navigation'
import Logo from './Logo';


const Sidebar = () => {
    const pathname = usePathname();

    return (
        <aside className='w-[240px] shadow-xl h-screen space-y-8'>
            <Link href='/' className='p-4 pb-2'>
                <Logo />
            </Link>

            <nav className='px-2'>
                <ul>
                    {
                        sidebarItems.map((item) => (
                            <li key={item.id}>
                                <Link href={item.path} className={`flex items-center gap-3 text-sm px-4 py-2 hover:bg-gray-100 rounded-lg transition duration-100 ${pathname === item.path ? "text-[#722F37" : "text-gray-600"}`}>
                                    {item.icon}
                                    {item.name}
                                </Link>
                            </li>
                        ))
                    }
                </ul>
            </nav>
        </aside>
    )
}

export default Sidebar