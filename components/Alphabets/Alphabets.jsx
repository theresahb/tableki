import React, { useState } from 'react'
import { alphabets } from '../../data'

const Alphabets = () => {
    const [active, setActive] = useState(0)

    const handleClick = (index) => {
        setActive(index)
    }

    return (
        <section>
            <div className="flex flex-col gap-4 px-4 py-14 mb-24 md:px-14">
                <h3 className='text-xl font-medium'>Alphabetical Index</h3>
                <div className="flex flex-col gap-4">
                    <div className="flex gap-2 bg-slate-200 w-fit rounded overflow-hidden">
                        {alphabets.map((tab, index) => (
                            <button type="submit" 
                            key={index} 
                            onClick={() => handleClick(index)}
                            className={`${active === index ? 'bg-primaryColor text-white' : 'bg-slate-200'} px-8 py-2 text-sm`}
                            >{tab.title}</button>
                        ))}
                    </div>
                    <div className="">
                        {alphabets[active] && 
                            <div className='flex items-center gap-x-8 gap-y-4 flex-wrap'>
                                {alphabets[active].content.map((item) => (
                                    <p key={item.id} className='text-sm hover:text-primaryColor hover:underline'>
                                        <a href="#">{item.text}</a>
                                    </p>
                                ))}
                            </div>
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Alphabets
