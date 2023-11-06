import Image from 'next/image'
import React from 'react'
import { tab } from '../../data'
import Link from 'next/link'

const HomeTab = () => {
    return (
        <div>
            <div className="flex justify-between items-center gap-4 bg-white px-4 py-2 fixed left-0 right-0 bottom-0 border-t border-t-gray-300 shadow-xl md:px-8 lg:hidden">
                {tab.map((item) => (
                    <Link href={item.link}>
                        <button 
                            type='submit' 
                            key={item.id} 
                            className={`tab flex flex-col justify-center items-center gap-1 px-2 py-1 hover:text-primaryColor transition duration-700 ease-in-out`}
                            >
                            <Image src={item.image} width={30} height={30} className='tab-filter w-6' />
                            <small className='small text-[#817b7b] sx:text-[.6rem] md:text-base'>{item.text}</small>
                        </button>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default HomeTab
