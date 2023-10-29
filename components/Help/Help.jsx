import React from 'react'
import Image from 'next/image'

const Help = () => {
  return (
    <section>
        <div className="flex flex-col gap-8 justify-between items-center px-4 py-14 md:flex-row md:gap-8 md:px-14">
            <div className="w-full hidden md:flex">
                <Image src={`/assets/home-page-apteka.svg`} width={500} height={100} />
            </div>
            <div className="flex flex-col gap-4 w-full">
                <h3 className='text-xl font-medium'>
                    We  help you find  better deals and  reserve products at discounted prices at pharmacies near you
                </h3>
                <p>
                    You don’t have to run around pharmacies looking for all the necessary products, but find them and book 
                    them on the website, so that you can pick them up at a convenient time at the nearest pharmacy near your 
                    home or on your way to work, saving your time and money. On this site you will also find reference 
                    information on medicines (instructions, analogues, defective series of drugs, etc.), current data on the 
                    availability of medicines and their prices in pharmacies in Ukraine.
                </p>
                <p>
                    Tabletki.ua (UA tablets) - search for medications in pharmacies
                </p>
            </div>
        </div>
    </section>
  )
}

export default Help
