import React from 'react'
import { animals, children, current, derma, medical, sports, vitamins } from '../../data'
import Image from 'next/image'

const Categories = () => {
  return (
    <section className='md:w-[100%] lg:w-[70%]'>
        <div className="flex flex-col gap-24 sx:justify-center sx:items-center">
            <div className="flex flex-col gap-8">
                <h2 className='text-2xl text-[#101010]'>Current categories</h2>
                <div className="grid grid-cols-2 gap-4 sx:grid-cols-1 md:grid-cols-3">
                    {current.map((item) => (
                        <div key={item.id} className="flex flex-col rounded-lg overflow-hidden w-full">
                            <div className="">
                                <Image src={item.image} width={'100%'} height={'100%'} />
                            </div>
                            <div className={`${item.id === 1 ? 'bg-red-100' : item.id === 2 ? 'bg-orange-100' : 'bg-blue-100'} px-4 py-3`}>
                                <p className='font-medium'>{item.text}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="flex flex-col gap-8">
                <h2 className='text-2xl text-[#101010]'>Vitamins and minerals</h2>
                <div className="grid grid-cols-2 gap-4 sx:grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
                    {vitamins.map((item) => (
                        <div key={item.id} className="flex flex-col gap-4">
                            <div className="">
                                <Image src={item.image} width={'100%'} height={'100%'} />
                            </div>
                            <div className="text-center">
                                <p className='font-medium'>{item.text}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="flex flex-col gap-8">
                <h2 className='text-2xl text-[#101010]'>Dermatocosmetics</h2>
                <div className="grid grid-cols-2 gap-4 sx:grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
                    {derma.map((item) => (
                        <div key={item.id} className="flex flex-col">
                            <div className="">
                                <Image src={item.image} width={'100%'} height={'100%'} />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="flex flex-col gap-8">
                <h2 className='text-2xl text-[#101010]'>Goods for children</h2>
                <div className="grid grid-cols-2 gap-4 sx:grid-cols-1 md:grid-cols-3">
                    {children.map((item) => (
                        <div key={item.id} className="flex flex-col rounded-lg overflow-hidden">
                            <div className="">
                                <Image src={item.image} width={'100%'} height={'100%'} />
                            </div>
                            <div className={`${item.id === 1 ? 'bg-red-100' : item.id === 2 ? 'bg-blue-100' : 'bg-purple-100'} px-4 py-3`}>
                                <p className='font-medium'>{item.text}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="flex flex-col gap-8">
                <h2 className='text-2xl text-[#101010]'>Sports and health</h2>
                <div className="grid grid-cols-2 gap-4 sx:grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
                    {sports.map((item) => (
                        <div key={item.id} className="flex flex-col">
                            <div className="">
                                <Image src={item.image} width={'100%'} height={'100%'} />
                            </div>
                            <div className="text-center">
                                <p className='font-medium'>{item.text}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="flex flex-col gap-8">
                <h2 className='text-2xl text-[#101010]'>Products for animals</h2>
                <div className="grid grid-cols-2 gap-4 sx:grid-cols-1 md:grid-cols-3">
                    {animals.map((item) => (
                        <div key={item.id} className="flex flex-col rounded-lg overflow-hidden">
                            <div className="">
                                <Image src={item.image} width={'100%'} height={'100%'} />
                            </div>
                            <div className={`${item.id === 1 ? 'bg-purple-100' : item.id === 2 ? 'bg-red-100' : 'bg-blue-100'} px-4 py-3`}>
                                <p className='font-medium'>{item.text}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="flex flex-col gap-8">
                <h2 className='text-2xl text-[#101010]'>Medical equipment</h2>
                <div className="grid grid-cols-2 gap-4 sx:grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
                    {medical.map((item) => (
                        <div key={item.id} className="flex flex-col">
                            <div className="">
                                <Image src={item.image} width={'100%'} height={'100%'} />
                            </div>
                            <div className="text-center">
                                <p className='font-medium'>{item.text}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </section>
  )
}

export default Categories
