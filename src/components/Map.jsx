import { useContext } from "react"
import { PiecesContext } from '../context/PiecesContext'

function Map() {
    const {title, author, img, quote, address} = useContext(PiecesContext)
    const {bgImg} = useContext(PiecesContext)
  return (
    <section className={`relative flex flex-col items-center pt-10 min-h-[92.5vh] lg:min-h-[90vh] bg-cover overflow-y-scroll pb-[10vh] lg:pl-[20vw] lg:items-start lg:pt-14`} style={{ backgroundImage: `url(${bgImg})`}}>
        <div className="absolute inset-0 bg-black opacity-80 z-0"></div>
        <div className="relative z-10 flex flex-col items-center gap-10 md:items-start lg:ml-0 lg:w-[70vw]">
            <h2 className='text-2xl text-gray-100 w-[70vw] font-semibold md:ml-[7.5vw] md:w-[85vw] md:text-4xl md:pt-12 lg:w-[70vw] lg:ml-0'>{quote}</h2>
            <div className="flex flex-col gap-8 md:flex-row md:w-full md:items-start md:justify-center md:mt-16 md:gap-[5vw] w-[70vw] lg:justify-start lg:mt-8 lg:gap-[7.5vw]">
              <figure className="w-[70vw] bg-gray-100 pb-6 md:w-2/5 lg:w-1/3 lg:pb-8">
                  <img src={img} alt="art piece image" className="border-4 border-gray-100 lg:border-2"/>
                  <h3 className="mt-6 mx-4 text-2xl font-bold lg:font-semibold lg:mt-4">{title}</h3>
                  <p className="mx-4 mt-2 font-semibold text-gray-600 lg:mt-0">{author}</p>
              </figure>
              <figure className="w-[70vw] bg-gray-600 h-[70vw] md:w-2/5 md:h-[40vw] lg:h-[40vh]">
              <iframe
                title="Ubicación en Google Maps"
                width="600"
                height="450"
                loading="lazy"
                allowFullScreen
                src={address}
              ></iframe>
              </figure>
            </div>
        </div>
    </section>

  )
}

export default Map