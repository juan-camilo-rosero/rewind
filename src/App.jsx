import { PiecesContext, PiecesContextProvider } from './context/PiecesContext'
import Header from './components/Header'
import Nav from './components/Nav'
import Main from './components/Main'
import SignUp from './components/SignUp'
import { auth, db } from './firebase/firebase.config'
import './App.css'
import { useContext, useEffect } from 'react'
import { SectionContext } from './context/SectionContext'
import { doc, getDoc } from 'firebase/firestore'
import Loading from './components/Loading'

function App() {

  const {main, setMain, loading, setLoading, setSection} = useContext(SectionContext)
  const {newPiece, setActualPiece, updatePieces} = useContext(PiecesContext)

  useEffect(() => {
    const queryString = window.location.search
    const urlParams = new URLSearchParams(queryString)
    const userCode = urlParams.get('code')
    const piece = urlParams.get('piece')
    auth.onAuthStateChanged(async user => {
      if (!user) {
        setMain(false)
      }
      else{
        const userRef = doc(db, "users", user.email)
            const userSnap = await getDoc(userRef)
            if (userSnap.exists()) {
                const userData = userSnap.data();
                setActualPiece(userData.actual_piece)
                const pieces = await updatePieces((userData.actual_piece == 0) ? 0 : userData.actual_piece - 1)
                if(piece) setSection("art_piece")
                if(userCode) await newPiece(userCode, userData.actual_piece, pieces, user.email)
                setLoading(false)
            } else {
                console.log("No such document!");
            }
      }
    });
  }, [])

  return (
    <>
      <Header/>
      {(main)
      ? (loading) 
        ? <Loading/>
        : <><Nav/><Main/></>
      : <SignUp/>
      }
    </>
  )
}

export default App
