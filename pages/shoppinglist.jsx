import React, { useState } from 'react'
import Layout from '../components/Layout/Layout'
import { shopTab } from '../data'
import Image from 'next/image'
import Head from 'next/head'

const Shopping = () => {
    const [active, setActive] = useState(0)

    const handleClick = (index) => {
        setActive(index)
    }

    return (
        <>
            <Head>
                <title>Shopping List</title>
                <meta name='keywords' content='tabletki' />
            </Head>
            <Layout>
                <section>
                    <div className="flex justify-between items-center ">
                        <div className="flex flex-col gap-2 w-[100%] border-r border-gray-200 lg:w-[70%]">
                            <div className="flex justify-center items-center gap-2 w-full border-b border-gray-200 md:justify-start md:items-start">
                                {shopTab.map((tab, index) => (
                                    <button type="submit" 
                                    key={index} 
                                    onClick={() => handleClick(index)}
                                    className={`${active === index ? 'border-b-2 border-primaryColor text-primaryColor' : 'border-b-2 border-white'} flex items-center flex-col gap-1 px-8 py-2 text-sm text-center`}
                                    >
                                        <a href={tab.link}><p className='text-center'>{tab.title}</p><small>{tab.subtext}</small></a>
                                    </button>
                                ))}
                            </div>
                            <div className="">
                                {shopTab[active] && 
                                    <div className='flex justify-center items-center flex-wrap gap-x-8 gap-y-4 py-8 w-full'>{shopTab[active].content.map((item) => (
                                        <div className="flex flex-col items-center gap-4 w-full">
                                            <form action="" className="w-full px-4">
                                                <input type="search" name="" id="" placeholder='Enter the name of the drug, product' className='bg-gray-100 text-slate-500 px-3 py-2 w-full outline-none rounded-md placeholder:text-slate-500 placeholder:font-light' />
                                            </form>
                                            <div className="flex flex-col justify-center items-center gap-2">
                                                <div className="">
                                                    <Image src={item.image} width={100} height={80} />
                                                </div>
                                                <p className='text-sm uppercase text-primaryColor'>{item.text}</p>
                                            </div>
                                        </div>
                                    ))}</div>
                                }
                            </div>
                        </div>
                        <div className="hidden justify-center items-center px-8 py-4 w-[30%] lg:flex">
                            <ul className='flex flex-col gap-8'>
                                <li className='flex items-center gap-2'><span className='flex justify-center items-center bg-primaryColor text-white text-xs rounded-[50%] w-5 h-5 p-1 text-center'>1</span>Create a shopping list</li>
                                <li className='flex items-center gap-2'><span className='flex justify-center items-center bg-primaryColor text-white text-xs rounded-[50%] w-5 h-5 p-1 text-center'>2</span>Choose the nearest pharmacy that has all the necessary products</li>
                                <li className='flex items-center gap-2'><span className='flex justify-center items-center bg-primaryColor text-white text-xs rounded-[50%] w-5 h-5 p-1 text-center'>3</span>Make a reservation with a discount</li>
                                <li className='flex gap-2 text-primaryColor text-sm'><span className='flex justify-center items-center bg-transparent text-primaryColor text-xs border border-primaryColor rounded-[50%] w-5 h-5 p-1 text-center'>!</span>About the shopping list</li>
                            </ul>
                        </div>
                    </div>
                </section>
            </Layout>
        </>
        
    )
}

export default Shopping
