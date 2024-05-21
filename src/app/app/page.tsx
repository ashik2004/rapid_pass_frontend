import Image from 'next/image';
import React from 'react'
import Header from './Header';

const AppRapidPass = () => {
    return (
        <div>
            <Header title={`Welcome, ${"Name"}`} />

            <div className='space-y-8'>
                <div className='grid grid-cols-3 gap-8'>
                    <div className='rounded-3xl bg-gray-100 p-8'>
                        <p className='text-gray-500 text-lg'>Total Balance</p>

                        <h3 className='text-3xl font-bold'>৳0.00</h3>
                    </div>
                    <div className='rounded-3xl bg-gray-100 p-8'>
                        <p className='text-gray-500 text-lg'>Total Balance</p>

                        <h3 className='text-3xl font-bold'>৳0.00</h3>
                    </div>
                    <div className='rounded-3xl bg-gray-100 p-8'>
                        <p className='text-gray-500 text-lg'>Total Balance</p>

                        <h3 className='text-3xl font-bold'>৳0.00</h3>
                    </div>
                </div>

                <div className='grid grid-cols-3 gap-8'>
                    <div className='space-y-4'>
                        <h2 className='text-lg font-normal text-[#37393A]'>Recent Transactions</h2>

                        <div>
                            <ul>
                                <li className='flex items-center gap-8 cursor-pointer hover:bg-gray-100 transition duration-100 rounded-md p-4'>
                                    <Image src="/check_circle.svg" alt="check circle" width={20} height={20} />

                                    <div className='flex items-center justify-between gap-12'>
                                        <div>
                                            <p className='font-bold text-sm text-[#37393A]'>Uttara To Agargaon</p>
                                            <p className='text-xs text-[#37393A] font-light'>01/05/2024</p>
                                        </div>
                                        <div>
                                            <p className='font-bold text-sm text-[#37393A]'>৳200.34</p>
                                            <p className='text-xs text-[#37393A] font-light'>234 590 6782</p>
                                        </div>
                                    </div>
                                </li>
                                <li className='flex items-center gap-8 cursor-pointer hover:bg-gray-100 transition duration-100 rounded-md p-4'>
                                    <Image src="/check_circle.svg" alt="check circle" width={20} height={20} />

                                    <div className='flex items-center justify-between gap-12'>
                                        <div>
                                            <p className='font-bold text-sm text-[#37393A]'>Uttara To Agargaon</p>
                                            <p className='text-xs text-[#37393A] font-light'>01/05/2024</p>
                                        </div>
                                        <div>
                                            <p className='font-bold text-sm text-[#37393A]'>৳200.34</p>
                                            <p className='text-xs text-[#37393A] font-light'>234 590 6782</p>
                                        </div>
                                    </div>
                                </li>
                                <li className='flex items-center gap-8 cursor-pointer hover:bg-gray-100 transition duration-100 rounded-md p-4'>
                                    <Image src="/check_circle.svg" alt="check circle" width={20} height={20} />

                                    <div className='flex items-center justify-between gap-12'>
                                        <div>
                                            <p className='font-bold text-sm text-[#37393A]'>Uttara To Agargaon</p>
                                            <p className='text-xs text-[#37393A] font-light'>01/05/2024</p>
                                        </div>
                                        <div>
                                            <p className='font-bold text-sm text-[#37393A]'>৳200.34</p>
                                            <p className='text-xs text-[#37393A] font-light'>234 590 6782</p>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className='space-y-4'>
                        <h2 className='text-lg font-normal text-[#37393A]'>Recent Travels</h2>

                        <div>
                            <ul>
                                <li className='flex items-center gap-8 cursor-pointer hover:bg-gray-100 transition duration-100 rounded-md p-4'>
                                    <Image src="/check_circle.svg" alt="check circle" width={20} height={20} />

                                    <div className='flex items-center justify-between gap-12'>
                                        <div>
                                            <p className='font-bold text-sm text-[#37393A]'>Uttara To Agargaon</p>
                                            <p className='text-xs text-[#37393A] font-light'>01/05/2024</p>
                                        </div>
                                        <div>
                                            <p className='font-bold text-sm text-[#37393A]'>৳200.34</p>
                                            <p className='text-xs text-[#37393A] font-light'>234 590 6782</p>
                                        </div>
                                    </div>
                                </li>
                                <li className='flex items-center gap-8 cursor-pointer hover:bg-gray-100 transition duration-100 rounded-md p-4'>
                                    <Image src="/check_circle.svg" alt="check circle" width={20} height={20} />

                                    <div className='flex items-center justify-between gap-12'>
                                        <div>
                                            <p className='font-bold text-sm text-[#37393A]'>Uttara To Agargaon</p>
                                            <p className='text-xs text-[#37393A] font-light'>01/05/2024</p>
                                        </div>
                                        <div>
                                            <p className='font-bold text-sm text-[#37393A]'>৳200.34</p>
                                            <p className='text-xs text-[#37393A] font-light'>234 590 6782</p>
                                        </div>
                                    </div>
                                </li>
                                <li className='flex items-center gap-8 cursor-pointer hover:bg-gray-100 transition duration-100 rounded-md p-4'>
                                    <Image src="/check_circle.svg" alt="check circle" width={20} height={20} />

                                    <div className='flex items-center justify-between gap-12'>
                                        <div>
                                            <p className='font-bold text-sm text-[#37393A]'>Uttara To Agargaon</p>
                                            <p className='text-xs text-[#37393A] font-light'>01/05/2024</p>
                                        </div>
                                        <div>
                                            <p className='font-bold text-sm text-[#37393A]'>৳200.34</p>
                                            <p className='text-xs text-[#37393A] font-light'>234 590 6782</p>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className='space-y-4'>
                        <h2 className='text-lg font-normal text-[#37393A]'>Recharge</h2>

                        <div>
                            <ul>
                                <li className='flex items-center gap-8 cursor-pointer hover:bg-gray-100 transition duration-100 rounded-md p-4'>
                                    <Image src="/check_circle.svg" alt="check circle" width={20} height={20} />

                                    <div className='flex items-center justify-between gap-12'>
                                        <div>
                                            <p className='font-bold text-sm text-[#37393A]'>Uttara To Agargaon</p>
                                            <p className='text-xs text-[#37393A] font-light'>01/05/2024</p>
                                        </div>
                                        <div>
                                            <p className='font-bold text-sm text-[#37393A]'>৳200.34</p>
                                            <p className='text-xs text-[#37393A] font-light'>234 590 6782</p>
                                        </div>
                                    </div>
                                </li>
                                <li className='flex items-center gap-8 cursor-pointer hover:bg-gray-100 transition duration-100 rounded-md p-4'>
                                    <Image src="/check_circle.svg" alt="check circle" width={20} height={20} />

                                    <div className='flex items-center justify-between gap-12'>
                                        <div>
                                            <p className='font-bold text-sm text-[#37393A]'>Uttara To Agargaon</p>
                                            <p className='text-xs text-[#37393A] font-light'>01/05/2024</p>
                                        </div>
                                        <div>
                                            <p className='font-bold text-sm text-[#37393A]'>৳200.34</p>
                                            <p className='text-xs text-[#37393A] font-light'>234 590 6782</p>
                                        </div>
                                    </div>
                                </li>
                                <li className='flex items-center gap-8 cursor-pointer hover:bg-gray-100 transition duration-100 rounded-md p-4'>
                                    <Image src="/check_circle.svg" alt="check circle" width={20} height={20} />

                                    <div className='flex items-center justify-between gap-12'>
                                        <div>
                                            <p className='font-bold text-sm text-[#37393A]'>Uttara To Agargaon</p>
                                            <p className='text-xs text-[#37393A] font-light'>01/05/2024</p>
                                        </div>
                                        <div>
                                            <p className='font-bold text-sm text-[#37393A]'>৳200.34</p>
                                            <p className='text-xs text-[#37393A] font-light'>234 590 6782</p>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AppRapidPass;