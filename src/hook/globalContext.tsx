import React, { 
    createContext,
    ReactNode,
    useContext, 
    useState
} from 'react'
interface GlobalContextData{
    favorite: boolean;
    setFavorite(value: boolean): void;
    heart: string;
    setHeart(value: string): void;

}

interface ProviderProps{
    children: ReactNode;
}

const GlobalContext = createContext<GlobalContextData>({} as GlobalContextData);

export const GlobalProvider = ({children}: ProviderProps) => {
    const[favorite,setFavorite] = useState(false);
    const [heart, setHeart] = useState('hearto');

    return (
        <GlobalContext.Provider
            value={{
               favorite,
               setFavorite,
               heart,
               setHeart
            }}
        >
            {children}
        </GlobalContext.Provider>
    )
}

export const useGlobal = () => useContext(GlobalContext);