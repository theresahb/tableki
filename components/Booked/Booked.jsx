import Link from 'next/link'
import React from 'react'

const Booked = () => {
    return (
        <section>
            <div className="flex flex-col gap-8 px-12 py-8">
                <div className="border-b border-gray-200">
                    <h2 className="text-xl font-medium py-2">Previously Booked</h2>
                </div>
                <div className="flex flex-col gap-8">
                    <div className="flex flex-col gap-2">
                        <h3 className="text-lg font-medium">Booking history is empty</h3>
                        <p className='font-light'>You haven't booked anything yet. If you are registered on the Tabletki.ua website and you had bookings, you need to <span className="text-primaryColor"><Link href={'/cabinet/login'}>log in</Link></span> to see them.</p>
                    </div>
                    <div className="flex flex-col gap-2">
                        <h3 className="text-lg font-medium">Why book?</h3>
                        <p className='font-light'>You will be sure that the ordered products are waiting for you at the pharmacy at the specified price.</p>
                    </div>
                    <div className="flex flex-col gap-2">
                        <h3 className="text-lg font-medium">How to make a reservation?</h3>
                        <p className='font-light'>Find a product or make a <span className="text-primaryColor"><Link href={'/shoppinglist'}>shopping list</Link></span>. Choose a pharmacy where it is convenient to pick up everything and press the "Book" button.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Booked
