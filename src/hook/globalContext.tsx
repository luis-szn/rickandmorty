import React, { 
    createContext,
    ReactNode,
    useContext, 
    useState
} from 'react'
interface GlobalContextData{
    favorite: number[];
    handleFavorite: (character: number) => void
    heart: string;
    setHeart(value: string): void;

}
interface ProviderProps{
    children: ReactNode;
}

const GlobalContext = createContext({} as GlobalContextData);

export const GlobalProvider = ({children}: ProviderProps) => {
    const[favorite,setFavorite] = useState<number[]>([]);
    const [heart, setHeart] = useState('hearto');

    function handleFavorite(id : number ){
        const favorites = [...favorite]
        if(favorites.includes(id)){
            setFavorite([...favorites]);
        }else{
            setFavorite([...favorites, id]);
            setHeart('heart');
        }
    }   

    return (
        <GlobalContext.Provider
            value={{
               favorite,
               handleFavorite,
               heart,
               setHeart
            }}
        >
            {children}
        </GlobalContext.Provider>
    )
}

export const useGlobal = () => useContext(GlobalContext);