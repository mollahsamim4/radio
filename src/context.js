import React, { useContext, useState } from "react";
import { Prompt } from "react-router";
import links from "./links"
const AppContext = React.createContext();



const AppProvider = ({ children }) => {
    const [name, setName] = useState()


    const writeName = name => {
        let answer = prompt("what is your name")
        if (answer) {
            setName(answer)
        }
    }
    return <AppContext.Provider value={{ links, writeName, name }}>
        {children}
    </AppContext.Provider >
}

const useGlobal = () => {
    return useContext(AppContext)
}

export { AppProvider, useGlobal }