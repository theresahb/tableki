import Link from 'next/link'
import React from 'react'

const Pharmacy = () => {
  return (
    <section>
        <div className="flex flex-col gap-8 px-12 py-8">
            <div className="border-b border-gray-200">
                <h2 className="text-xl font-medium py-2">My Pharmacies</h2>
            </div>
            <div className="flex flex-col gap-8">
                <div className="flex flex-col gap-2">
                    <h3 className="text-lg font-medium">The "My pharmacies" list is empty</h3>
                    <p className='font-light'>If you are registered on the Tabletki.ua website and you have pharmacies in the list, then you need to <span className="text-primaryColor"><Link href={'/cabinet/login'}>log in</Link></span> to see them.</p>
                </div>
                <div className="flex flex-col gap-2">
                    <h3 className="text-lg font-medium">Why add pharmacies to the list?</h3>
                    <p className='font-light'>Add pharmacies for quick access to information about them.</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Pharmacy
