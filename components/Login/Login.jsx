import React, { useState } from 'react'
import Image from 'next/image'
import Head from 'next/head'

const Login = () => {
    const [active, setActive] = useState(1)

    const handleTabClick = (tab) => {
        setActive(tab)
    }

    return (
        <>
            <Head>
                <title>Login</title>
                <meta name='keywords' content='tabletki' />
            </Head>
            
            <section>
                <div className="flex flex-col justify-center items-center gap-8 px-14 py-8 lg:justify-start lg:items-start">
                    <div className="border-b border-gray-200">
                        <button type="submit" className={`${active === 1 ? 'border-b-2 border-primaryColor text-black' : 'border-b-2 border-white text-[#333333ab]'} text-lg font-medium px-6 py-2`} onClick={() => handleTabClick(1)}>Exit</button>
                        <button type="submit" className={`${active === 2 ? 'border-b-2 border-primaryColor text-black' : 'border-b-2 border-white text-[#333333ab]'} text-lg font-medium px-6 py-2`} onClick={() => handleTabClick(2)}>Registration</button>
                    </div>
                    <div className="">
                        {active === 1 && 
                            <div className="flex flex-col justify-center items-center gap-12 lg:flex-row lg:justify-start lg:items-start">
                                <div className="flex flex-col gap-8">
                                    <form action="" className='flex flex-col gap-4'>
                                        <input type="email" name="" id="" placeholder='Email' className='bg-gray-100 text-slate-500 px-3 py-2 w-full outline-none rounded placeholder:text-slate-500 placeholder:font-light' />
                                        <input type="password" name="" id="" placeholder='Password' className='bg-gray-100 text-slate-500 px-3 py-2 w-full outline-none rounded placeholder:text-slate-500 placeholder:font-light' />
                                        <button type="submit"  className='text-white px-8 py-2 bg-orange-500 rounded uppercase'>Exit</button>
                                    </form>
                                    <div className="flex flex-col gap-3">
                                        <p className='font-medium text-lg'>Why do you need a personal account:</p>
                                        <ul className="flex flex-col gap-2">
                                            <li className='text-sm flex items-center gap-2'>
                                                <div className="">
                                                    <Image src='/assets/check-circle.svg' width={15} height={15} />
                                                </div>
                                                Book faster with saved contact information.
                                            </li>
                                            <li className='text-sm flex items-center gap-2'>
                                                <div className="">
                                                    <Image src='/assets/check-circle.svg' width={15} height={15} />
                                                </div>
                                                Access your shopping cart and bookings on any device.
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-6">
                                    <h3 className='text-lg font-medium'>Log in through a social network:</h3>
                                    <div className="flex flex-col gap-3">
                                        <button type="submit" className='bg-[#202124] px-8 py-2 text-gray-200'>Sign in with Google</button>
                                        <button type="submit" className='bg-blue-600 px-8 py-2 text-white'>Facebook</button>
                                        <p className='text-sm font-light text-primaryColor opacity-80'><a href="#">Confidentiality Agreement</a></p>
                                    </div>
                                </div>
                            </div> 
                        }
                        {active === 2 && 
                            <div className="flex flex-col justify-start items-start gap-12 lg:flex-row">
                                <div className="flex flex-col gap-8">
                                    <form action="" className='flex flex-col gap-4'>
                                        <input type="email" name="" id="" placeholder='Email' className='bg-gray-100 text-slate-500 px-3 py-2 w-full outline-none rounded placeholder:text-slate-500 placeholder:font-light' />
                                        <input type="password" name="" id="" placeholder='Password' className='bg-gray-100 text-slate-500 px-3 py-2 w-full outline-none rounded placeholder:text-slate-500 placeholder:font-light' />
                                        <input type="password" name="" id="" placeholder='Repeat the password' className='bg-gray-100 text-slate-500 px-3 py-2 w-full outline-none rounded placeholder:text-slate-500 placeholder:font-light' />
                                        <button type="submit"  className='text-white px-8 py-2 bg-orange-500 rounded uppercase'>Sign Up</button>
                                    </form>
                                    <div className="flex flex-col gap-3">
                                        <p className='font-medium text-lg'>Why do you need a personal account:</p>
                                        <ul className="flex flex-col gap-2">
                                            <li className='text-sm flex items-center gap-2'>
                                                <div className="">
                                                    <Image src='/assets/check-circle.svg' width={15} height={15} />
                                                </div>
                                                Book faster with saved contact information.
                                            </li>
                                            <li className='text-sm flex items-center gap-2'>
                                                <div className="">
                                                    <Image src='/assets/check-circle.svg' width={15} height={15} />
                                                </div>
                                                Access your shopping cart and bookings on any device.
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-6">
                                    <h3 className='text-lg font-medium'>Log in through a social network:</h3>
                                    <div className="flex flex-col gap-3">
                                        <button type="submit" className='bg-[#202124] px-8 py-2 text-gray-200'>Вхід через Google</button>
                                        <button type="submit" className='bg-blue-600 px-8 py-2 text-white'>Facebook</button>
                                        <p className='text-sm text-primaryColor opacity-80'><a href="#">Confidentiality Agreement</a></p>
                                    </div>
                                </div>
                            </div> 
                        }
                    </div>
                </div>
            </section>
        </>
    )
}

export default Login
