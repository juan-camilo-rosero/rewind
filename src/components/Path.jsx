import React, { useContext } from 'react'
import { SectionContext } from '../context/SectionContext'

function Path() {
    const {setSection} = useContext(SectionContext)
  return (
    <section className='w-full bg-gray-100 flex flex-col items-center'>
        <figure className={`h-[25vh] w-full bg-cover relative lg:h-[30vh]`} style={{ backgroundImage: `url(${"distrito_grafiti_bg.jpg"})`}}>
            <div className="absolute inset-0 bg-black opacity-70 z-0"></div>
            <div className="relative z-10 flex items-center justify-center w-full h-full">
                <div className='h-[12.5vh] w-[12.5vh] bg-gray-100 flex items-center justify-center bg-opacity-90 backdrop-blur-md'>
                    <p className='text-2xl font-semibold'>1</p>
                </div>
                <div className='h-[12.5vh] w-1/2 bg-gray-100 flex flex-col pl-4 justify-center bg-opacity-70 backdrop-blur-sm'>
                    <p className='text-lg font-semibold'>Distrito Grafiti</p>
                    <p className='text-sm font-semibold text-gray-600'>Varios artistas</p>
                </div>
            </div>
        </figure>
        <figure className={`h-[25vh] w-full bg-black lg:h-[30vh]`}>
            <div className="relative z-10 flex items-center justify-center w-full h-full">
                <div className='h-[12.5vh] w-[12.5vh] bg-gray-100 flex items-center justify-center'>
                    <p className='text-2xl font-semibold'>2</p>
                </div>
                <div className='h-[12.5vh] w-1/2 bg-black border-2 border-gray-100 cursor-pointer flex flex-col pl-4 justify-center transition-all text-gray-100 hover:bg-gray-100 hover:text-black' onClick={() => setSection("map")}>
                    <p className='text-xl font-semibold '>Ver en el mapa</p>
                </div>
            </div>
        </figure>
    </section>
  )
}

export default Path