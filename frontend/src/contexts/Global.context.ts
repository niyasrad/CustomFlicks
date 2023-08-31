import { Dispatch, SetStateAction, createContext, useContext } from "react";
import { ProfilerType } from "../containers/profile/Profile";

interface GlobalContextInterface {
    userID: string,
    isLoggedIn: boolean,
    profile: ProfilerType | null,
    setUserID?: Dispatch<SetStateAction<string>>,
    setIsLoggedIn?: Dispatch<SetStateAction<boolean>>,
    setProfile?: Dispatch<SetStateAction<ProfilerType | null>>,
    handleSignOut?: () => void
}

const defaultValue: GlobalContextInterface = {
    userID: '',
    profile: null,
    isLoggedIn: false
}

export const GlobalContext = createContext<GlobalContextInterface>(defaultValue)

export const useGlobalContext = () => useContext(GlobalContext)