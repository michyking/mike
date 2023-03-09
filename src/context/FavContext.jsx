import { createContext, useState } from "react";

export const MichyContext = createContext(null);

const ContextProvider = ({children}) =>{
    const [count3, setCount3] = useState(10);

    return <MichyContext.Provider value={{count3, setCount3}}>
        {children}
    </MichyContext.Provider>
};

export default ContextProvider;