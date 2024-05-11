import { useContext } from "react";
import { useState } from "react";
import { RiGoogleFill } from "react-icons/ri";
import { AuthContext } from "../context/AuthContext"
import { db } from "../firebase/firebase.config";
import { collection, setDoc } from "firebase/firestore";


function SignUp() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const {register, login, loginWithGoogle, userId, setUserId} = useContext(AuthContext)

    const handleCreateAccount = async () => {
        try {
            const res = await register(email, password)
            const id = res.user.uid
            setUserId(id)
            const data = {
                actual_piece: 0
            }
            await setDoc(collection(db, "users", id), data);
            await setDoc(collection(db, "art_pieces", "bogota"), {
                0: {
                    title: "Policarpa Salavarrieta marcha al suplicio",
                    author: "Anonymus",
                    address: "",
                    content: 'Policarpa Salavarrieta is a woman who had a great incidence in the liberation process of Colombia. She carried out espionage work in support of the rebellion, however, when she was discovered on November 10, La Pola and her companions were court-martialed. Thus, Policarpa was sentenced to death along with Alejo Sabaraín, José Manuel Díaz, Antonio Galeano, José María Arcos, Antonio Suárez, Jacobo Marufú, Francisco Arellano and Manuel Díaz, when they were found guilty of conspiracy. His speech before his death has been preserved with great appreciation in the country: "Indolent people! How different your fate would be today if you knew the price of freedom! But it is not too late. See that, though a woman and young, I have courage enough to suffer death and a thousand other deaths, and do not forget this example! You wretched people! I pity you; some day you will have more dignity!"',
                    code: "axDGTrw38f8geNkrZo",
                    img: "policarpa.jpeg",
                    bg_img: "policarpa_bg.jpg"
                },
                1: {
                    title: "Distrito Graffiti",
                    author: "Diverse urban artists",
                    address: "",
                    content: 'Graffiti District is a complex of urban art works. It is also a strategy to promote the responsible practice of graffiti. This strategy focuses on the recovery of public space, in addition to generating actions that promote the exercise of an active, co-responsible and participatory citizenship in the creation of the city we all dream of. The more than 15 works painted on the walls of the sector have a diversity of techniques, messages and people, but all have a high symbolic charge around the public space, and of course; also for creativity.',
                    code: "i95Tb5B4YsVeR4fXah",
                    img: "distrito_grafiti.jpg",
                    bg_img: "distrito_grafiti_bg.jpg"
                },
                2: {
                    title: "El Testigo",
                    author: "Jesús Abad Colorado",
                    address: "",
                    content: '"The Witness", a captivating photographic exhibition by Jesús Abad Colorado, presents an intimate and powerful look at the armed conflict in Colombia, through a compilation of photographs in various parts of the country. Through striking images and moving testimonies, Abad Colorado plunges us into the depths of tragedy and the resilience of victims and survivors, offering a unique and visceral perspective on the reality facing the country.',
                    code: "7P8CWLnG8Ae2jT7fYT",
                    img: "el_testigo.jpeg",
                    bg_img: "el_testigo_bg.jpg"
                },
                3: {
                    title: "La diputada golpeada",
                    author: "Alexander Apóstol",
                    address: "",
                    content: 'The exhibition addresses complex national identities in relation to sexuality, gender and the decline of modernism in Latin America. Through his work, Apóstol unravels the codes of gender, race and identity embedded in Latin American ideologies from the era of modernization to the present, exploring both the historicist vision under past dictatorships and the utopia of constructivism during the oil boom. His works delve into the corporeality of nationalism and populism, while others, such as "La diputada golpeada" (The Beaten Deputy), challenge the dominant aesthetic-political stereotypes. The monumentality of his works seeks to deploy a critique of the aesthetics of the State and the visual tools of consolidation of its vision, while the exhibition at MAMBO contextualizes these themes in the Colombian panorama, evidencing aesthetic and propagandistic similarities in the discourses of Latin American power, with particular relevance in Colombia due to its historical proximity and its being the main recipient of Venezuelan migrants.',
                    code: "S5eM8YuehfA9vH6sW2",
                    img: "diputada_golpeada.jpg",
                    bg_img: "diputada_golpeada_bg.jpg"
                },
            });
        } catch (err) {
            await login(email, password)
            console.log(err);
        }
    }

  return (
    <div className="pt-[7.5vh] w-full h-screen bg-blue-300 bg-cover flex flex-col items-center justify-center gap-12" style={{ backgroundImage: `url(bg.png)`}}>
        <h1 className="text-gray-100 text-3xl font-semibold w-[70vw]">It seems that you are not loged in...</h1>
        <div className="w-[70vw]">
            <form className="flex flex-col gap-8" onSubmit={e => {
                e.preventDefault()
                handleCreateAccount()
            }}>
                <input className="w-full px-4 py-2 text-xl bg-black bg-opacity-5 backdrop-blur-md text-gray-100 border-b-[3px] border-gray-100 outline-none focus:bg-opacity-35" type="email" placeholder='email' onChange={e => setEmail(e.target.value)} value={email}/>
                <input className="w-full px-4 py-2 text-xl bg-black bg-opacity-5 backdrop-blur-md text-gray-100 border-b-[3px] border-gray-100 outline-none focus:bg-opacity-35" type="password" placeholder='password' onChange={e => setPassword(e.target.value)} value={password}/>
                <button className="w-full px-4 py-2 bg-gray-100 bg-opacity-60 backdrop-blur-md text-xl text-black font-semibold transition-all hover:bg-opacity-100" type="submit">continue</button>
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