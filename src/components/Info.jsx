import React, { useContext } from 'react'
import { SectionContext } from '../context/SectionContext'

function Info() {
    const {setSection} = useContext(SectionContext)

  return (
    <section className={`flex flex-col items-center pt-10 gap-10 md:pt-20 md:gap-16 md:items-start md:pl-[15vw] lg:pl-[20vw] lg:gap-14 lg:min-h-[90vh] lg:justify-center lg:py-12`}>
        <h2 className='text-2xl w-[70vw] lg:w-2/3 font-semibold md:text-4xl'>“El arte es el hombre agregado a la naturaleza”</h2>
        <p className='w-[70vw] lg:w-2/3 text-xl leading-9 text-justify md:text-2xl md:leading-10'>En esta pintura se observa a una voluptuosa pareja bailando en un salón decorado con cintas con los colores de la bandera colombiana y un espejo que insinúa la profundidad del espacio.</p>
        <button className='w-[70vw] py-2 bg-gray-100 border-2 border-black transition-all hover:bg-black hover:text-gray-100 text-black text-xl font-semibold md:text-2xl md:w-1/2 md:py-4 lg:w-auto lg:px-16 lg:py-2' onClick={() => setSection("map")}>Iniciar la búsqueda</button>
    </section>
  )
}

export default Info