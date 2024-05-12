import React, { useContext } from 'react'
import { PiecesContext } from '../context/PiecesContext'

function ArtPiece() {
    const {title, content, author, img, pieces, actualPiece} = useContext(PiecesContext)
  return (
    <section className='w-full flex flex-col pt-10 items-center gap-10 pb-[10vh]'>
        <img className='w-[70vw] h-40 object-cover md:w-3/5 md:h-[35vw] lg:w-2/5 lg:h-[50vh] bg-gray-300' src={img} alt="art piece"/>
        <h2 className='text-2xl font-semibold text-center w-[70vw] md:w-3/5 md:text-left md:text-4xl lg:w-2/5'>{title || "Title uwu"}</h2>
        <span className='text-lg font-semibold text-center w-[70vw] text-gray-600 -mt-8 md:w-3/5 md:text-left md:text-xl lg:w-2/5'>{author}</span>
        <p className='w-[70vw] text-xl leading-9 text-justify md:w-3/5 lg:w-2/5'>{content}</p>
    </section>
  )
}

export default ArtPiece