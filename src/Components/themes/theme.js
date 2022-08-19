import { createContext, useEffect, useState } from "react"

export const themes={
    darkmode: {
        className:"bg-dark text-light motion btn-outline-warning text-center"
    },
    lightmode: {
        className:"bg-light text-warning motion btn-outline-danger text-center"

    }
}


export const ThemeContext = createContext()

export const ThemeProvider =({children}) =>{
    const [isDark, setIsDark] =  useState(false)
    const theme= isDark? themes.darkmode : themes.lightmode
    function toggleTheme(){
        localStorage.setItem('isDark', JSON.stringify(!isDark))
        setIsDark(!isDark)
    }
    useEffect(()=>{
        const isDark = localStorage.getItem('isDark') === 'true'
        setIsDark(isDark)
    },[])
    return(
        <ThemeContext.Provider value={[{theme, isDark}, toggleTheme]}>
            {children}
        </ThemeContext.Provider>
    )
}