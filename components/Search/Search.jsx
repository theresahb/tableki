import React from 'react'
import Image from 'next/image'

const Search = () => {
  return (
    <form action="#" className='static flex justify-center items-center round-md bg-primaryColor px-4 py-4 md:p-0 md:relative'>
        <div className="flex items-center gap-4 round-md bg-white px-4 py-2 my-0 mx-auto w-full static md:border-4 md:border-primaryColor rounded-xl md:absolute md:w-1/2">
            <div className="bg-white">
                <Image src='/assets/icon-search-green.svg' width={30} height={30} />
            </div>
            <input type="search" name="" id="" placeholder='Search...' className='w-full px-1 outline-none' />
        </div>
    </form>
  )
}

export default Search
