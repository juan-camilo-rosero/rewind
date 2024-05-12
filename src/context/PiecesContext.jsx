import { doc, getDoc, updateDoc } from "firebase/firestore"
import { createContext, useContext, useState} from "react"
import { db } from "../firebase/firebase.config"
import { AuthContext } from "./AuthContext"
import { SectionContext } from "./SectionContext"

export const PiecesContext = createContext()

export function PiecesContextProvider(props) {

    // Possible Pieces: "information", "map", "painting", "path"
    const {email} = useContext(AuthContext)
    const {setSection} = useContext(SectionContext)
    const [title, setTitle] = useState("You have to visit the art piece")
    const [author, setAuthor] = useState("")
    const [content, setContent] = useState("")
    const [address, setAddress] = useState("")
    const [quote, setQuote] = useState('')
    const [img, setImg] = useState("not_found.gif")
    const [bgImg, setBgImg] = useState("")
    const [actualPiece, setActualPiece] = useState(-1)
    const [pieces, setPieces] = useState({})

    const completePiece = async (pieces, userPiece, userEmail) => {
        if(userPiece < Object.keys(pieces).length){
            const newPiece = userPiece + 1
            const userRef = doc(db, "users", userEmail)
            await updateDoc(userRef, {actual_piece: newPiece})
            window.location.href = "https://rewind-hackathon.vercel.app/?piece=1"
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
            if(actualPiece === -1) return piecesData
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