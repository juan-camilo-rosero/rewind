import { useContext, useState } from 'react'
import { PiecesContext } from '../context/PiecesContext'
import { SectionContext } from '../context/SectionContext'
import { RiVolumeUpFill, RiPauseMiniLine } from "react-icons/ri";
import Chat from './Chat';

function ArtPiece() {
    const {title, content, author, img} = useContext(PiecesContext)
    const {setSection, setChat} = useContext(SectionContext)
    const [speaking, setSpeaking] = useState(false)

    const sayLoud = e => {
      if ('speechSynthesis' in window) {
        if (!window.speechSynthesis.speaking) {
          var utterance = new SpeechSynthesisUtterance(content);
          window.speechSynthesis.speak(utterance);
          setSpeaking(true);
        } else {
          window.speechSynthesis.resume();
          setSpeaking(true);
        }
      } else {
        alert("Your browser doesn't have this functionality");
      }
    }
    
    const pause = () => {
      if ('speechSynthesis' in window) {
        window.speechSynthesis.pause();
        setSpeaking(false)
      }
    }
  return (
    <section className='w-full flex flex-col pt-10 items-center gap-6 pb-[12vh]'>
        <Chat/>
        <img className='w-[70vw] h-40 object-cover md:w-3/5 md:h-[35vw] lg:w-2/5 lg:h-[50vh] bg-gray-300' src={img} alt="art piece"/>
        <h2 className='text-2xl font-semibold text-center w-[70vw] md:w-3/5 md:text-left md:text-4xl lg:w-2/5'>{title || "Title uwu"}</h2>
        <span className='text-lg font-semibold text-center w-[70vw] text-gray-600 -mt-4 md:w-3/5 md:text-left md:text-xl lg:w-2/5'>{author}</span>
        <div className='w-[70vw] mt-6 md:w-3/5 lg:w-2/5'>
        {(title === "You have to visit the art piece")
          ? null
          : <button className='w-10 h-10 bg-black text-gray-100 flex justify-center items-center left-4' onClick={
              () => {
                (speaking)
                ? pause()
                : sayLoud()
              }
              }>
              {(speaking)
              ? <RiPauseMiniLine/>
              : <RiVolumeUpFill/>
              }
            </button>
        }
        </div>
        <p className='w-[70vw] text-xl leading-9 text-justify md:w-3/5 lg:w-2/5'>{content}</p>
        {(title === "You have to visit the art piece")
          ? null
          : <button className='w-[70vw] mt-4 py-2 bg-gray-100 border-2 border-black transition-all hover:bg-black hover:text-gray-100 text-black text-xl font-semibold md:text-2xl md:w-3/5 md:mt-12 md:px-12 lg:w-auto lg:px-16 lg:py-2' onClick={() => setChat(true)}>any question?</button>
        }
        <button className='w-[70vw] mb-8 py-2 bg-black border-2 transition-all text-gray-100 text-xl font-semibold md:text-2xl md:w-3/5 lg:w-auto lg:px-16 lg:py-2' onClick={() => setSection("map")}>continue</button>
    </section>
  )
}

export default ArtPiece