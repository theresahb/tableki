import React from 'react'
import { sidebar } from '../../data'
import Image from 'next/image'

const Sidebar = () => {
  return (
    <aside className='lg:w-[30%]'>
        <div className="hidden flex-col gap-12 lg:flex">
            <div className="flex flex-col gap-4 w-[100%]">
                {sidebar.map((side) => (
                    <div key={side.id} className="flex gap-2 items-center px-2 py-1 cursor-pointer rounded transition duration-500 ease-in-out hover:bg-green-100">
                        <div className="">
                            <Image src={side.image} width={40} height={60} />
                        </div>
                        <p>{side.text}</p>
                    </div>
                ))}
            </div>
            <div className="flex flex-col items-center justify-center text-center gap-8 border border-gray-200 rounded-2xl px-3 py-4">
                <div className="flex flex-col gap-4">
                    <div className="flex items-center justify-center">
                        <Image src='/assets/qr-get-mobile-app.svg' width={100} height={100} />
                    </div>
                    <div className="flex flex-col gap-2">
                        <p className='text-xl'>It is more convenient in the application</p>
                        <small className='text-base'>Reserve goods and track when to pick them up</small>
                    </div>
                </div>
                <div className="flex gap-4 border-t border-gray-200 pt-4">
                    <button type="submit">
                        <Image src='/assets/appstore-ua.svg' width={120} height={60} />
                    </button>
                    <button type="submit">
                        <Image src='/assets/googleplay.svg' width={120} height={100} />
                    </button>
                </div>
            </div>
        </div>
    </aside>
  )
}

export default Sidebar
