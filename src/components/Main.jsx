import { useContext } from 'react'
import Info from './Info'
import Map from './Map'
import { SectionContext } from '../context/SectionContext'
import ArtPiece from './ArtPiece'
import Path from './Path'

function Main() {
    const {section} = useContext(SectionContext)
    let sectionContent

    if(section === "information") sectionContent = <Info/>
    if(section === "map") sectionContent = <Map/>
    if(section === "art_piece") sectionContent = <ArtPiece/>
    if(section === "path") sectionContent = <Path/>

  return (
    <main className='w-full pt-[7.5vh] min-h-[92.5vh] bg-gray-100 lg:pt-[10vh] lg:min-h-[90vh]'>
        {sectionContent}
    </main>
  )
}

export default Main