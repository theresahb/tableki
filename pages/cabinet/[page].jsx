import React from 'react'
import Layout from '../../components/Layout/Layout'
import Head from 'next/head'
import Login from '../../components/Login/Login'
import Link from 'next/link'
import Pharmacy from '../../components/Pharmacy/Pharmacy'
import Revised from '../../components/Revised/Revised'
import Booked from '../../components/Booked/Booked'
import Lists from '../../components/Lists/Lists'

export async function getServerSideProps({ params }) {
    const { page } = params
    return {
        props: { page }
    }
}

const CabinetPage = ({ page }) => {
  return (
    <>
        <Head>
            <title>All</title>
            <meta name='keywords' content='tabletki' />
        </Head>
        <Layout>
            <section className=''>
                <div className='flex'>
                    <div className="hidden flex-col gap-12 pl-6 pt-6 pb-20 bg-gray-100 w-[30%] lg:pl-6 lg:flex xl:pl-14">
                        <h3 className='text-lg font-medium'>Personal Office</h3>
                        <ul className="flex flex-col gap-6">
                            <li className='text-sm font-light border-b border-gray-300 pb-4 hover:underline active:text-primaryColor'><Link href={'/cabinet/login'}>LOGIN / REGISTRATION</Link></li>
                            <li className='text-sm font-light border-b border-gray-300 pb-4 hover:underline active:text-primaryColor'><Link href={'/reserve/history'}>MY AMOR</Link></li>
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
                    <div className="w-[100%] lg:w-[70%]">
                        {page === 'login' && <Login /> }
                        {page === 'pharmacy' && <Pharmacy /> }
                        {page === 'goodsHistory' && <Revised /> }
                        {page === 'orderedGoodsHistory' && <Booked /> }
                        {page === 'customList' && <Lists /> }
                    </div>
                </div>
            </section>
        </Layout>
    </>
    
  )
}

export default CabinetPage
