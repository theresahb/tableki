import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { navIcons, navTabs } from '../../data'
import Link from 'next/link'

const HomeNavbar = () => {

    const [activeTab, setActiveTab] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleTabClick = (index) => {
        setActiveTab(index);
        setIsModalOpen(!isModalOpen);
    };

    return (
        <nav>
            <div className="flex justify-between items-center px-4 py-4 bg-primaryColor lg:px-4 xl:px-12">
                <div className="flex justify-center items-center gap-4">
                    <div className="w-[10rem] md:w-[14rem]">
                        <Image src='/assets/logo-tabletki-white-2.svg' width={220} height={30} />
                    </div>
                    <div className="hidden justify-center items-center gap-4 relative lg:flex">
                        {navTabs.map((item, index) => (
                            <button 
                                type='submit' 
                                key={item.id} 
                                onClick={() => handleTabClick(index)}
                                className={`flex justify-center items-center gap-1 border border-[#00000015] rounded-md px-2 py-1 transition duration-500 ease-in-out hover:bg-[#00000015] ${activeTab === index ? 'bg-[#00000015]' : 'bg-transparent'}`}>
                                <div className="">
                                    <Image src={item.image} width={30} height={30} />
                                </div>
                                <p className='text-white text-sm'>{item.text}</p>
                            </button>
                        ))}
                    </div>
                    
                </div>
                <div className="hidden justify-center items-center gap-4 relative md:flex">
                    {navIcons.map((item) => (
                        <Link href={item.link} key={item.id} className='relative'>
                            <div key={item.id} className="relative border-[#00000015] rounded-md px-1 py-1 transition duration-500 ease-in-out hover:bg-[#00000015]">
                                <Image src={item.image} width={30} height={30} />
                            </div>
                            {item.text ? 
                                <div className="flex justify-center items-center absolute left-5 -top-[.1rem] bg-orange-500 w-4 h-4  rounded-full">
                                    <small className="flex justify-center items-center text-[.7rem] text-white">{item.text}</small>
                                </div>
                            : null}
                        </Link>
                    ))}
                </div>
                <button type='submit' className="flex justify-center items-center gap-1 border border-[#00000015] rounded-md px-1 py-1 transition duration-500 ease-in-out hover:bg-[#00000015] md:hidden">
                    <div className="">
                        <Image src='/assets/icon-city-point.svg' width={20} height={20} />
                    </div>
                    <p className='text-white text-sm'>Kyiv</p>
                </button>
            </div>
            <div className={`${navTabs[activeTab] && navTabs[activeTab].content && isModalOpen ? 'bg-[#00000048]' : 'bg-transparent'} hidden absolute px-8 z-10 w-full h-[100vh] transition duration-500 ease-in-out lg:flex`}>
                {navTabs[activeTab] && navTabs[activeTab].content && isModalOpen && (
                    <div className=''>
                        <div className="flex flex-col gap-2 w-fit bg-white px-2 py-2 rounded-xl">
                            {navTabs[activeTab].content.map((item) => (
                                <div
                                    key={item.id}
                                    className="flex gap-2 items-center px-4 py-1 cursor-pointer rounded transition duration-500 ease-in-out hover:bg-green-100"
                                >
                                    <div>
                                        <Image src={item.image} width={40} height={60} />
                                    </div>
                                    <p>{item.text}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </nav>
    )
}

export default HomeNavbar
