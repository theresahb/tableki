import Link from 'next/link'
import React from 'react'

const Revised = () => {
    return (
        <section>
            <div className="flex flex-col gap-8 px-12 py-8">
                <div className="border-b border-gray-200">
                    <h2 className="text-xl font-medium py-2">Views</h2>
                </div>
                <div className="flex flex-col gap-8">
                    <p className='font-light'>You have not viewed any products yet. It's time to use our <span className="text-primaryColor"><Link href={'/cabinet/goodsHistory'}>catalog</Link></span>.</p>
                </div>
            </div>
        </section>
    )
}

export default Revised
