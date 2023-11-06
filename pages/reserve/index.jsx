import React from 'react'
import Layout from '../../components/Layout/Layout'
import { cart } from '../../data'
import Head from 'next/head'

const Reserve = () => {
  return (
    <>
        <Head>
            <title>Cart</title>
            <meta name='keywords' content='tabletki' />
        </Head>
        <Layout>
            <section>
                <div className="flex flex-col justify-center items-center gap-4 bg-gray-100 py-8">
                    <div className="flex flex-col gap-5 w-fit">
                        <h2 className='text-2xl font-semibold pl-6 md:pl-0'>Basket</h2>
                        <div className="flex flex-col gap-6 px-6 py-10 mb-6 bg-white rounded-none shadow-lg md:rounded-md">
                            <h3 className='text-center text-lg font-medium'>Cart is empty :(</h3>
                            <div className="flex flex-col gap-6">
                                {cart.map((list) => (
                                    <div key={list.id} className="flex flex-col">
                                        <p className='text-lg'>{list.text}</p>
                                        <small className='text-sm'>{list.subtext}</small>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    </>
  )
}

export default Reserve
