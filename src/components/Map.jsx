import { useContext } from "react";
import { PiecesContext } from '../context/PiecesContext';

function Map() {
    const {pieces, actualPiece} = useContext(PiecesContext);

    return (
        (Object.keys(pieces).length === actualPiece)
        ? <div className="flex flex-col gap-12 items-center justify-center w-full h-[90vh]">
            <h2 className="text-4xl text-black font-semibold w-[70vw] text-center">Congratulations, you finished!!!</h2>
            <a href='reward.png' download='reward.png' title="reward" className="w-[70vw] md:w-1/2 lg:w-1/3 py-2 bg-black text-2xl text-gray-100 font-semibold text-center">Receive reward</a>
        </div>
        : <section className={`relative flex flex-col items-center pt-10 min-h-[92.5vh] lg:min-h-[90vh] bg-cover overflow-y-scroll pb-[10vh] lg:pl-[20vw] lg:items-start lg:pt-14`} style={{ backgroundImage: `url(${pieces[actualPiece].bg_img})` || "#" }}>
            <div className="absolute inset-0 bg-black opacity-80 z-0"></div>
            <div className="relative z-10 flex flex-col items-center gap-10 md:items-start lg:ml-0 lg:w-[70vw]">
                <h2 className='text-2xl text-gray-100 w-[70vw] font-semibold md:ml-[7.5vw] md:w-[85vw] md:text-4xl md:pt-12 lg:w-[70vw] lg:ml-0'>{pieces[actualPiece].quote || "Loading..."}</h2>
                <div className="flex flex-col gap-8 md:flex-row md:w-full md:items-start md:justify-center md:mt-16 md:gap-[5vw] w-[70vw] lg:justify-start lg:mt-8 lg:gap-[7.5vw]">
                    <figure className="w-[70vw] bg-gray-100 pb-6 md:w-2/5 lg:w-1/3 lg:pb-8">
                        <img src={pieces[actualPiece].img || ""} alt="art piece image" className="border-4 border-gray-100 lg:border-2 max-h-[40vh] md:max-h-[30vh] lg:max-h-[40vh] w-full object-cover"/>
                        <h3 className="mt-6 mx-4 text-2xl font-bold lg:font-semibold lg:mt-4">{pieces[actualPiece].title || ""}</h3>
                        <p className="mx-4 mt-2 font-semibold text-gray-600 lg:mt-0">{pieces[actualPiece].author || ""}</p>
                    </figure>
                    <figure className="w-[70vw] bg-black h-[70vw] md:w-2/5 md:h-[40vw] lg:h-[40vh]">
                        <iframe
                            title={pieces[actualPiece].title || ""}
                            width="100%"
                            height="100%"
                            loading="lazy"
                            allowFullScreen
                            src={pieces[actualPiece].address || ""}
                        ></iframe>
                    </figure>
                </div>
            </div>
        </section>
    );
}

export default Map;
