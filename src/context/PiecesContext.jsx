import { createContext, useEffect, useState} from "react"

export const PiecesContext = createContext()

export function PiecesContextProvider(props) {

    // Possible Piecess: "information", "map", "painting", "path"
    const [completedPieces, setCompletedPieces] = useState({})
    const [title, setTitle] = useState("Título de prueba")
    const [author, setAuthor] = useState("Autor de prueba")
    const [content, setContent] = useState("En esta pintura se observa a una voluptuosa pareja bailando en un salón decorado con cintas con los colores de la bandera colombiana y un espejo que insinúa la profundidad del espacio. El hombre, de frente, mira inexpresivamente al espectador, mientras la mujer está de espaldas. Parece que el tiempo se ha detenido y solo es posible evidenciar el movimiento del baile por la pierna levantada de la mujer y su cabello ondeante. Al fondo se aprecia otra pareja y la pierna de una mujer sugiere la presencia de una más. Fernando Botero (1932) ha realizado varios dibujos y pinturas con el mismo tema. Músicos, bailarines e instrumentos musicales hacen parte de un repertorio recurrente inspirado en los recuerdos de su infancia y juventud, por lo que sus escenas parecen haberse detenido en los años treinta y cuarenta. La pintura de este artista se caracteriza por...")
    const [address, setAddress] = useState("https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1988.4396566399973!2d-74.0706671365234!3d4.615608700000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f998484277acf%3A0x3bab23efae829923!2sMuseo%20Nacional%20de%20Colombia!5e0!3m2!1ses!2sco!4v1715461779865!5m2!1ses!2sco")
    const [quote, setQuote] = useState('"Nací por mi mamá, pero moriré por el grafiti"')
    const [img, setImg] = useState("distrito_grafiti.jpg")
    const [bgImg, setBgImg] = useState("distrito_grafiti_bg.jpg")
    const [actualPiece, setActualPiece] = useState("distrito_grafiti_bg.jpg")

    return (
        <PiecesContext.Provider value={{
            completedPieces,
            setCompletedPieces,
            title,
            setTitle,
            author,
            setAuthor,
            content,
            setContent,
            address,
            setAddress,
            quote,
            setQuote,
            img,
            setImg,
            bgImg,
            setBgImg,
        }}>
            {props.children}
        </PiecesContext.Provider>
    )
}