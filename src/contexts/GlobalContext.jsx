import { createContext, useState } from "react";
import Loader from "../components/Loader";

// 1. Creiamo il contenitore per i dati
export const GlobalContext = createContext();

// 2. Creiamo il "fornitore" (Provider)
export const GlobalProvider = ({ children }) => {
    const [loading, setLoading] = useState(false);

    return (
        <GlobalContext.Provider value={{ setLoading }}>
            {children} 
            {/* Se loading è vero, mostra il Loader sopra tutto */}
            {loading && <Loader />}
        </GlobalContext.Provider>
    );
};