import { useContext } from "react";
import { useState } from "react";
import { RiGoogleFill } from "react-icons/ri";
import { AuthContext } from "../context/AuthContext"
import { db } from "../firebase/firebase.config";
import { setDoc, doc } from "firebase/firestore";
import { SectionContext } from "../context/SectionContext";


function SignUp() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [loading, setLoading] = useState(false)

    const {register, login, loginWithGoogle, userId, setUserId} = useContext(AuthContext)
    const {setMain} = useContext(SectionContext)

    const handleCreateAccount = async () => {
        try {
            const res = await register(email, password)
            await setDoc(doc(db, "users", email), {
                actual_piece: 0
            })
            setMain(true)
        } catch (err) {
            try {
                await login(email, password)
                setMain(true)
            } catch (err) {
                console.error("There was an error :(");
                console.error(err);
            }
        }
    }

  return (
    <div className="pt-[7.5vh] w-full h-screen bg-black bg-cover flex flex-col items-center justify-center gap-12" style={{ backgroundImage: `url(bg.png)`}}>
        <h1 className="text-gray-100 text-3xl font-semibold w-[70vw]">It seems that you are not loged in...</h1>
        <div className="w-[70vw]">
            <form className="flex flex-col gap-8" onSubmit={e => {
                setLoading(true)
                e.preventDefault()
                handleCreateAccount()
            }}>
                <input className="w-full px-4 py-2 text-xl bg-black bg-opacity-5 backdrop-blur-md text-gray-100 border-b-[3px] border-gray-100 outline-none focus:bg-opacity-35" type="email" placeholder='email' onChange={e => setEmail(e.target.value)} value={email}/>
                <input className="w-full px-4 py-2 text-xl bg-black bg-opacity-5 backdrop-blur-md text-gray-100 border-b-[3px] border-gray-100 outline-none focus:bg-opacity-35" type="password" placeholder='password' onChange={e => setPassword(e.target.value)} value={password}/>
                <button className="w-full px-4 py-2 bg-gray-100 bg-opacity-60 backdrop-blur-md text-xl text-black font-semibold transition-all hover:bg-opacity-100 disabled:bg-opacity-30" type="submit" disabled = {loading}>{(loading) ? "loading..." : "continue"}</button>
            </form>
            <div className="flex w-[70vw] justify-between my-10 items-center">
                <div className="bg-gray-100 w-2/5 h-[2px]"/>
                <p className="text-xl text-gray-100">or</p>
                <div className="bg-gray-100 w-2/5 h-[2px]"/>
            </div>
            <button className="w-full px-4 py-[12px] bg-gray-100 bg-opacity-60 backdrop-blur-md text-lg flex items-center justify-center gap-4 text-black font-semibold transition-all hover:bg-opacity-100" onClick={() => loginWithGoogle()}>
                <RiGoogleFill/>
                <p>continue with Google</p>
            </button>
        </div>
    </div>
  )
}

export default SignUp