import React from 'react'
import { apps, info, langs, partners, parts, services, users } from '../../data'
import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer>
        <div className="flex flex-col gap-14">
            <div className="flex flex-col gap-y-8 px-4 pt-8 border-t-2 border-gray-200 md:flex-row md:gap-x-4 md:px-14">
                {services.map((item) => (
                    <div key={item.id} className="flex flex-col gap-4">
                        <div className="flex items-center gap-3">
                            <div className="">
                                <Image src={item.image} width={40} height={60} />
                            </div>
                            <h3 className='text-xl text-primaryColor font-medium'>{item.text}</h3>
                        </div>
                        <p>{item.subtext} <span className='text-primaryColor'><a href="#">{item.link}</a></span></p>
                    </div>
                ))}
            </div>
            <div className="flex flex-col justify-center gap-16 px-4 py-14 bg-gray-100">
                <h1 className='text-3xl font-semibold text-center text-gray-400'>SELF-HYDRATION MAY BE DETRIMENTAL TO YOUR HEALTH</h1>
                <div className="flex flex-col gap-24">
                    <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
                        <div className="flex flex-col gap-4">
                            <h3 className='font-medium text-sm'>FOR USERS</h3>
                            <ul className="flex flex-col gap-2">
                                {users.map((item) => (
                                    <li key={item.id} className='text-sm'><a href="#">{item.text}</a></li>
                                ))}
                            </ul>
                        </div>
                        <div className="flex flex-col gap-4">
                            <h3 className='font-medium text-sm'>INFORMATION</h3>
                            <ul className="flex flex-col gap-2">
                                {info.map((item) => (
                                    <li key={item.id} className='text-sm'><a href="#">{item.text}</a></li>
                                ))}
                            </ul>
                        </div>
                        <div className="flex flex-col gap-14">
                            <div className="flex flex-col gap-4">
                                <h3 className='font-medium text-sm'>FOR PARTNERS</h3>
                                <ul className="flex flex-col gap-2">
                                    {parts.map((item) => (
                                        <li key={item.id} className='text-sm'><a href="#">{item.text}</a></li>
                                    ))}
                                </ul>
                            </div>
                            <div className="flex flex-col gap-4">
                                <h3 className='font-medium text-sm'>FOR SPECIALISTS</h3>
                                <p className='text-sm'><a href="#">Defective series</a></p>
                            </div>
                        </div>
                        <div className="flex flex-col gap-8">
                            <div className="flex flex-col gap-4">
                                <h3 className='font-medium text-sm'>OUR APPLICATIONS</h3>
                                <ul className="flex flex-col gap-2">
                                    {apps.map((item) => (
                                        <li key={item.id}>
                                            <a href="#">
                                                <Image src={item.image} width={120} height={60} />
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="flex flex-col gap-4">
                                <h3 className='font-medium text-sm'>PARTNERS</h3>
                                <ul className="flex flex-col gap-2">
                                    {partners.map((item) => (
                                        <li key={item.id}>
                                            <a href="#">
                                                <Image src={item.image} width={120} height={60} />
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className="flex flex-col gap-4 -mt-20">
                            <h3 className='font-medium text-sm'>INTERFACE LANGUAGE</h3>
                            <ul className="flex flex-col gap-2">
                                {langs.map((item) => (
                                    <li key={item.id} className='text-sm'><a href="#">{item.text}</a></li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className="flex flex-col justify-center items-center text-center gap-4">
                        <div className="">
                            <p>Feedback <span className='text-primaryColor'><a href="#">info@tabletki.ua</a></span></p>
                        </div>
                        <div className="">
                            <p>© LLC "MTPC", 2010-2023</p>
                            <p>Tabletki.ua - aggregator of pharmacies, medicines, hygiene, health and beauty products</p>
                        </div>
                        <div className="">
                            <Link href={'/'}>
                                <Image src='/assets/logo-footer.svg' width={220} height={30} />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer







