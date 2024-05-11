import { PiecesContextProvider } from './context/PiecesContext'
import Header from './components/Header'
import Nav from './components/Nav'
import Main from './components/Main'
import SignUp from './components/SignUp'
import { auth } from './firebase/firebase.config'
import './App.css'
import { useContext, useEffect } from 'react'
import { SectionContext } from './context/SectionContext'
import { AuthContext } from './context/AuthContext'

function App() {

  const {main, setMain} = useContext(SectionContext)
  const {setUserId} = useContext(AuthContext)

  useEffect(() => {
    auth.onAuthStateChanged(async user => {
      if (!user) {
        setMain(false)
      }
      else{
        setUserId(user.uid)
      }
    });
  }, [])

  return (
    <>
    
    <PiecesContextProvider>
      <Header/>
      {(main)
      ? <><Nav/><Main/></>
      : <SignUp/>
      }
    </PiecesContextProvider>
    </>
  )
}

export default App
