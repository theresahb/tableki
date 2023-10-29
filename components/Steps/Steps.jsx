import React from 'react'
import { steps } from '../../data'
import Image from 'next/image'

const Steps = () => {
  return (
    <section>
        <div className="grid grid-cols-1 gap-4 px-4 py-14 mt-8 bg-white rounded-t-2xl sm:grid-cols-2 md:grid-cols-2 lg:px-4 lg:grid-cols-4 xl:px-12">
            {steps.map((step) => (
                <div key={step.id} className="flex flex-col gap-3 border border-gray-200 rounded-md px-4 py-4">
                    <div className="flex items-center gap-4">
                        <div className="">
                            <Image src={step.image} width={50} height={50} />
                        </div>
                        <h3 className='text-xl font-medium'>{step.text}</h3>
                    </div>
                    <p>{step.subtext}</p>
                </div>
            ))}
        </div>
    </section>
  )
}

export default Steps
