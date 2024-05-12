import { doc, getDoc, updateDoc } from "firebase/firestore"
import { createContext, useContext, useState} from "react"
import { db } from "../firebase/firebase.config"
import { AuthContext } from "./AuthContext"
import { SectionContext } from "./SectionContext"

export const PiecesContext = createContext()

export function PiecesContextProvider(props) {

    // Possible Piecess: "information", "map", "painting", "path"
    const {email} = useContext(AuthContext)
    const {setSection} = useContext(SectionContext)
    const [title, setTitle] = useState("Título de prueba")
    const [author, setAuthor] = useState("Autor de prueba")
    const [content, setContent] = useState("En esta pintura se observa a una voluptuosa pareja bailando en un salón decorado con cintas con los colores de la bandera colombiana y un espejo que insinúa la profundidad del espacio. El hombre, de frente, mira inexpresivamente al espectador, mientras la mujer está de espaldas. Parece que el tiempo se ha detenido y solo es posible evidenciar el movimiento del baile por la pierna levantada de la mujer y su cabello ondeante. Al fondo se aprecia otra pareja y la pierna de una mujer sugiere la presencia de una más. Fernando Botero (1932) ha realizado varios dibujos y pinturas con el mismo tema. Músicos, bailarines e instrumentos musicales hacen parte de un repertorio recurrente inspirado en los recuerdos de su infancia y juventud, por lo que sus escenas parecen haberse detenido en los años treinta y cuarenta. La pintura de este artista se caracteriza por...")
    const [address, setAddress] = useState("https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1988.4396566399973!2d-74.0706671365234!3d4.615608700000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f998484277acf%3A0x3bab23efae829923!2sMuseo%20Nacional%20de%20Colombia!5e0!3m2!1ses!2sco!4v1715461779865!5m2!1ses!2sco")
    const [quote, setQuote] = useState('"Nací por mi mamá, pero moriré por el grafiti"')
    const [img, setImg] = useState("#")
    const [bgImg, setBgImg] = useState("distrito_grafiti_bg.jpg")
    const [actualPiece, setActualPiece] = useState(0)
    const [pieces, setPieces] = useState({})

    const completePiece = async (pieces, userPiece, userEmail) => {
        if(userPiece < Object.keys(pieces).length){
            const newPiece = userPiece + 1
            const userRef = doc(db, "users", userEmail)
            await updateDoc(userRef, {actual_piece: newPiece})
            window.location.href = "http://localhost:5173/?piece=1"
        }
    }

    const updatePieces = async actualPiece => {
        const docRef = doc(db, "art_pieces", "bogota");
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
            const piecesData = docSnap.data();
            setPieces(piecesData);
            const newPiece = piecesData[actualPiece]
            let nextPiece
            (actualPiece + 1 == Object.keys(piecesData).length)
            ? nextPiece = piecesData[actualPiece]
            : nextPiece = piecesData[actualPiece + 1];
            setTitle(newPiece.title)
            setImg(newPiece.img)
            setBgImg(newPiece.bg_img)
            setQuote(nextPiece.quote)
            setAddress(nextPiece.address)
            setAuthor(newPiece.author)
            setContent(newPiece.content)
            return piecesData
        } else {
            console.log("No such document!");
        }
    }

    const newPiece = (userCode, userPiece, pieces, email) => {
        const pieceCode = pieces[userPiece].code
        if (userCode === pieceCode){
            completePiece(pieces, userPiece, email)
        }
        else{
            setSection("art_piece")
        }
    }
    

    return (
        <PiecesContext.Provider value={{
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
            actualPiece,
            setActualPiece,
            pieces,
            setPieces,
            updatePieces,
            newPiece
        }}>
            {props.children}
        </PiecesContext.Provider>
    )
}