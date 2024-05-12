import { useContext } from 'react'
import { SectionContext } from '../context/SectionContext'
import { PiecesContext } from '../context/PiecesContext'

function Path() {
    const { setSection } = useContext(SectionContext)
    const { pieces, actualPiece } = useContext(PiecesContext)

    console.log(actualPiece);
    console.log(Object.keys(pieces).length);

    return (
        <section className='w-full flex flex-col items-center mb-[7.5vh] lg:mb-0 bg-black'>
            {Object.keys(pieces).map((piece, index) => {
                if (actualPiece > index) {
                    const pieceData = pieces[piece]
                    return (
                        <figure key={`${piece}-${index}`} className={`h-[25vh] w-full bg-cover relative lg:h-[30vh]`} style={{ backgroundImage: `url(${pieceData.bg_img})`}}>
                            <div className="absolute inset-0 bg-black opacity-70 z-0"></div>
                            <div className="relative z-10 flex items-center justify-center w-full h-full">
                                <div className='h-[12.5vh] w-[12.5vh] bg-gray-100 flex items-center justify-center bg-opacity-90 backdrop-blur-md'>
                                    <p className='text-xl font-semibold'>{index + 1}</p>
                                </div>
                                <div className='h-[12.5vh] w-1/2 bg-gray-100 flex flex-col pl-4 justify-center bg-opacity-70 backdrop-blur-sm'>
                                    <p className='text-md font-semibold'>{pieceData.title}</p>
                                    <p className='text-sm font-semibold text-gray-600'>{pieceData.author}</p>
                                </div>
                            </div>
                        </figure>
                    )
                } else {
                    return null;
                }
            })}
            <figure className={`h-[25vh] w-full bg-black lg:h-[30vh]`}>
                <div className="relative z-10 flex items-center justify-center w-full h-full">
                    <div className='h-[12.5vh] w-[12.5vh] bg-gray-100 flex items-center justify-center'>
                        <p className='text-xl font-semibold'>{actualPiece + 1}</p>
                    </div>
                    <div className='h-[12.5vh] w-1/2 bg-black border-2 border-gray-100 cursor-pointer flex flex-col pl-4 justify-center transition-all text-gray-100 hover:bg-gray-100 hover:text-black' onClick={() => setSection("map")}>
                        <p className='text-md font-semibold '>{(Object.keys(pieces).length !== actualPiece) ? "see on the map" : "recieve reward"}</p>
                    </div>
                </div>
            </figure>
        </section>
    )
}

export default Path
