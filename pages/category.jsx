import React from 'react'
import { sidebar } from '../data'
import Image from 'next/image'
import Layout from '../components/Layout/Layout'
import Head from 'next/head'

const Category = () => {
  return (
    <>
        <Head>
            <title>Category</title>
            <meta name='keywords' content='tabletki' />
        </Head>
        <Layout>
            <section>
                <div className="flex flex-col gap-6 py-8">
                    <h2 className='text-xl font-medium px-4'>Catalog of Goods</h2>
                    <div className="flex flex-col w-[100%]">
                        {sidebar.map((side) => (
                            <div key={side.id} className="flex gap-2 items-center px-4 py-4 cursor-pointer border-t border-t-gray-100 transition duration-500 ease-in-out hover:bg-green-100">
                                <div className="">
                                    <Image src={side.image} width={40} height={60} />
                                </div>
                                <p>{side.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </Layout>
    </>
    
  )
}

export default Category
