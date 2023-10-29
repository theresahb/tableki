import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

const Lists = () => {
    return (
        <section>
            <div className="flex flex-col gap-8 px-12 py-8">
                <div className="border-b border-gray-200">
                    <h2 className="text-xl font-medium py-2">Selected</h2>
                </div>
                <div className="flex flex-col gap-8">
                    <div className="flex flex-col gap-2">
                        <h3 className="text-lg font-medium">The selected products are empty</h3>
                        <p className='font-light'>You haven't added anything yet. If you are registered on the Tabletki.ua website and you have selected products, you need to <span className="text-primaryColor"><Link href={'/cabinet/login'}>log in</Link></span> to see them.</p>
                    </div>
                    <div className="flex flex-col gap-2">
                        <h3 className="text-lg font-medium">How to add products to favorites?</h3>
                        <p className='flex items-center gap-1'>
                            Click on the product 
                            <div className="">
                                <Image src='/assets/icon-user-selected.svg' width={25} height={25} />
                            </div>
                        </p>
                    </div>
                    <div className="flex flex-col gap-2">
                        <h3 className="text-lg font-medium">Why add products to favorites?</h3>
                        <p className='font-light'>Add products to collections to return to them later and to be able to view their instructions.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Lists
