import { useContext } from 'react'
import { SectionContext } from '../context/SectionContext'

function Info() {
    const {setSection} = useContext(SectionContext)

  return (
    <section className={`flex flex-col items-center pt-10 gap-10 md:pt-20 md:gap-16 md:items-start md:pl-[15vw] lg:pl-[20vw] lg:gap-14 lg:min-h-[90vh] lg:justify-center lg:py-12 pb-[12vh]`}>
        <h2 className='text-2xl w-[70vw] lg:w-2/3 font-semibold md:text-4xl'>“The object of art is not to reproduce reality, but to create a reality of the same intensity.”</h2>
        <p className='w-[70vw] lg:w-2/3 text-xl leading-9 text-justify md:text-2xl md:leading-10'>Hi, we want to welcome you to Rewind Bogota. During this trip, you will have to visit different works of art scattered throughout the city. We will give you the address and a small quote that represents the essence of the place, but once you get there, you will be able to scan a QR code with which you will unlock a more detailed description of what the artwork means and the location of the next artwork. Once you finish, we'll give you a small prize. Are you ready for the adventure?</p>
        <button className='w-[70vw] py-2 bg-gray-100 border-2 border-black transition-all hover:bg-black hover:text-gray-100 text-black text-xl font-semibold md:text-2xl md:w-1/2 md:py-4 lg:w-auto lg:px-16 lg:py-2' onClick={() => setSection("map")}>start search</button>
    </section>
  )
}

export default Info