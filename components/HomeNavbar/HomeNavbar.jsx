import React from 'react'
import Image from 'next/image'
import { navIcons } from '../../data'
import Link from 'next/link'

const HomeNavbar = () => {
  return (
    <nav>
        <div className="flex justify-between items-center px-4 py-4 bg-primaryColor lg:px-4 xl:px-12">
            <div className="flex justify-center items-center gap-4">
                <div className="w-[10rem] md:w-[14rem]">
                    <Image src='/assets/logo-tabletki-white-2.svg' width={220} height={30} />
                </div>
                <div className="hidden justify-center items-center gap-4 lg:flex">
                    <button type='submit' className="flex justify-center items-center gap-1 border border-[#00000025] rounded-md px-2 py-1">
                        <div className="">
                            <Image src='/assets/icon-catalog-white.svg' width={30} height={30} />
                        </div>
                        <p className='text-white text-sm'>Catalogue</p>
                    </button>
                    <button type='submit' className="flex justify-center items-center gap-1 border border-[#00000025] rounded-md px-2 py-1">
                        <div className="">
                            <Image src='/assets/icon-services-white.svg' width={30} height={30} />
                        </div>
                        <p className='text-white text-sm'>Services</p>
                    </button>
                    <button type='submit' className="flex justify-center items-center gap-1 border border-[#00000025] rounded-md px-2 py-1">
                        <div className="">
                            <Image src='/assets/icon-target-white.svg' width={30} height={30} />
                        </div>
                        <p className='text-white text-sm'>Kyiv</p>
                    </button>
                </div>
            </div>
            <div className="hidden justify-center items-center gap-4 md:flex">
                {navIcons.map((item) => (
                    <Link href={item.link} key={item.id}>
                        <div key={item.id} className="">
                            <Image src={item.image} width={30} height={30} />
                        </div>
                    </Link>
                ))}
            </div>
            <button type='submit' className="flex justify-center items-center gap-1 border border-[#00000025] rounded-md px-2 py-1 md:hidden">
                <div className="">
                    <Image src='/assets/icon-target-white.svg' width={30} height={30} />
                </div>
                <p className='text-white text-sm'>Kyiv</p>
            </button>
        </div>
    </nav>
  )
}

export default HomeNavbar
