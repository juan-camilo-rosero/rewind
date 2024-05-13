import { createContext, useState} from "react"

export const SectionContext = createContext()

export function SectionContextProvider(props) {

    // Possible sections: "information", "map", "art_piece", "path"
    const [section, setSection] = useState("information")
    const [main, setMain] = useState(true)
    const [loading, setLoading] = useState(true)
    const [chat, setChat] = useState(true)

    return (
        <SectionContext.Provider value={{
            section,
            setSection,
            main,
            setMain,
            loading,
            setLoading,
            chat,
            setChat
        }}>
            {props.children}
        </SectionContext.Provider>
    )
}