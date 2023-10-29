import React from 'react'
import Head from 'next/head'
import Layout from '../../components/Layout/Layout'
import Link from 'next/link'
import { cabinet } from '../../data'
import Image from 'next/image'

const Cabinet = () => {
  return (
    <>
        <Head>
            <title>Cabinet</title>
            <meta name='keywords' content='tabletki' />
        </Head>
        <Layout>
            <section className='hidden lg:flex'>
                <div className="flex flex-col gap-12 pl-6 pt-6 pb-20 bg-gray-100 w-[30%] lg:pl-6 xl:pl-14">
                    <h3 className='text-lg font-medium'>Personal Office</h3>
                    <ul className="flex flex-col gap-6">
                        <li className='text-sm font-light border-b border-gray-300 pb-4 hover:underline active:text-primaryColor'><Link href={'/cabinet/login'}>LOGIN / REGISTRATION</Link></li>
                        <li className='text-sm font-light border-b border-gray-300 pb-4 hover:underline active:text-primaryColor'>MY AMOR</li>
                        <li className='text-sm font-light border-b border-gray-300 pb-4'>MY PRODUCT LISTS</li>
                        <ul className="flex flex-col gap-4 pl-4">
                            <li className='text-sm font-light hover:underline active:text-primaryColor'><Link href={'/cabinet/goodsHistory'}>REVISED</Link></li>
                            <li className='text-sm font-light hover:underline active:text-primaryColor'><Link href={'/cabinet/orderedGoodsHistory'}>PREVIOUSLY BOOKED</Link></li>
                            <li className='text-sm font-light hover:underline active:text-primaryColor'><Link href={'/cabinet/customList'}>0 PRODUCTS SELECTED</Link></li>
                        </ul>
                        <li className='text-sm font-light border-b border-gray-300 pb-4'>CREATE A NEW LIST</li>
                        <li className='text-sm font-light border-b border-gray-300 pb-4 hover:underline active:text-primaryColor'><Link href={'/cabinet/pharmacy'}>MY PHARMACIES</Link></li>
                    </ul>
                </div>
            </section>
            <section className='flex lg:hidden'>
                <div className="w-[100dvw] pt-4 pb-32 px-2">
                    {cabinet.map((item) => (
                        <Link href={item.link}>
                            <div key={item.id} className="flex justify-between items-center px-4 py-3 rounded hover:bg-[#43b02a34]">
                                <div className="flex items-center gap-2">
                                    {item.image !== '' ? 
                                        <div className="bg-[#43b02a34] p-1 rounded">
                                            <Image src={item.image} width={30} height={30} />
                                        </div>
                                    : null}
                                    <p>{item.text}</p>
                                </div>
                                <div className="">
                                    <Image src='/assets/gray-right-chevron.svg' width={7} height={7} />
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </section>
        </Layout>
    </>
    
  )
}

export default Cabinet
