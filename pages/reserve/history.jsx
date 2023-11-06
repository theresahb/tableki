import React from 'react'
import Layout from '../../components/Layout/Layout'
import { history } from '../../data'
import Head from 'next/head'

const History = () => {
  return (
    <>
        <Head>
            <title>History</title>
            <meta name='keywords' content='tabletki' />
        </Head>
        <Layout>
            <section>
                <div className="flex flex-col justify-center items-center gap-4 bg-gray-100 py-8">
                    <div className="flex flex-col gap-6 px-6 py-10 mb-6 bg-white rounded-none shadow-lg md:rounded-md">
                        <div className="flex flex-col gap-6">
                            {history.map((list) => (
                                <div key={list.id} className="flex flex-col">
                                    <p className='text-lg'>{list.text}</p>
                                    <small className='text-sm'>{list.subtext}</small>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    </>
  )
}

export default History
