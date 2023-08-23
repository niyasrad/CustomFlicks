import { Dispatch, SetStateAction, createContext, useContext, useEffect, useLayoutEffect, useState } from "react";

export enum ThemeEnum {
    PRE = 'premium',
    RGL = 'regular',
    RSK = 'risky'
}

interface ThemeContextInterface {
    theme: string;
    setTheme?: Dispatch<SetStateAction<ThemeEnum>>;
    toggleTheme?: (theme: ThemeEnum) => void;
}

const defaultValue: ThemeContextInterface = {
    theme: 'regular'
}

const ThemeContext = createContext<ThemeContextInterface>(defaultValue)

export const useThemeContext = () => useContext(ThemeContext)

export default function Theme({ children }: { children: React.ReactNode }) {

    const [theme, setTheme] = useState<ThemeEnum>(ThemeEnum.RGL)

    const toggleTheme = (theme: ThemeEnum) => {
        setTheme(theme)
    }

    useEffect(() => {
        localStorage.setItem('theme', theme)
    }, [theme])

    useLayoutEffect(() => {

        const storedTheme = localStorage.getItem('theme') as ThemeEnum
        if (storedTheme && storedTheme in ThemeEnum) {
            setTheme(storedTheme)
        }

    }, [])

    return (
        <ThemeContext.Provider
            value={{
                theme,
                setTheme,
                toggleTheme
            }}
        >
            {children}
        </ThemeContext.Provider>
    )

}