import { useContext } from "react";
import { RiInformation2Fill, RiMap2Line, RiBrushFill, RiTrophyFill } from "react-icons/ri";
import { SectionContext } from "../context/SectionContext";

function Nav() {
    const {section, setSection} = useContext(SectionContext)
    const aClass = "w-1/4 border-2 border-black flex justify-center items-center h-[7.5vh] transition-all hover:bg-black hover:text-gray-100 lg:h-[12vh]"
  return (
    <nav className="fixed bottom-0 left-0 flex w-full items-end lg:flex-col lg:h-[48vh] lg:top-[26vh] lg:w-auto lg:items-start z-20">
        <a href="#" className={`${aClass} ${(section === "information" ? "bg-black text-gray-100 text-2xl h-[10vh] lg:w-[15vh]": "bg-gray-100 bg-opacity-50 backdrop-blur-sm text-xl lg:text-2xl lg:w-[12vh]")}`} onClick={() => setSection("information")}>
            <RiInformation2Fill/>
        </a>
        <a href="#" className={`${aClass} ${(section === "map" ? "bg-black text-gray-100 text-2xl h-[10vh] lg:w-[15vh]": "bg-gray-100 bg-opacity-50 backdrop-blur-sm text-xl lg:text-2xl lg:w-[12vh]")}`} onClick={() => setSection("map")}>
            <RiMap2Line />
        </a>
        <a href="#" className={`${aClass} ${(section === "art_piece" ? "bg-black text-gray-100 text-2xl h-[10vh] lg:w-[15vh]": "bg-gray-100 bg-opacity-50 backdrop-blur-sm text-xl lg:text-2xl lg:w-[12vh]")}`} onClick={() => setSection("art_piece")}>
            <RiBrushFill />
        </a>
        <a href="#" className={`${aClass} ${(section === "path" ? "bg-black text-gray-100 text-2xl h-[10vh] lg:w-[15vh]": "bg-gray-100 bg-opacity-50 backdrop-blur-sm text-xl lg:text-2xl lg:w-[12vh]")}`} onClick={() => setSection("path")}>
            <RiTrophyFill />
        </a>
    </nav>
  )
}

export default Nav