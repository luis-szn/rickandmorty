import React, { 
    createContext,
    ReactNode,
    useContext, 
    useState
} from 'react'
interface GlobalContextData{
    favorite: boolean;
    setFavorite(value: boolean): void;

}

interface ProviderProps{
    children: ReactNode;
}

const GlobalContext = createContext<GlobalContextData>({} as GlobalContextData);

export const GlobalProvider = ({children}: ProviderProps) => {
    const[favorite,setFavorite] = useState(false);

    return (
        <GlobalContext.Provider
            value={{
               favorite,
               setFavorite
            }}
        >
            {children}
        </GlobalContext.Provider>
    )
}

export const useGlobal = () => useContext(GlobalContext);