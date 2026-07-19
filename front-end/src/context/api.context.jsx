import { createContext, useContext, useState, useEffect,  } from "react";

const apiContext = createContext();

export const apiProvider = ({chidren}) => {

    const value = {

    }

    return(
      <apiContext.Provider value={value}>
        {chidren}
      </apiContext.Provider>
     )
}

export const useApi = () => {
    const context = useContext(apiContext);
    if(!context){
        throw new Error("Error in useApi")
    }
    const context = useContext(apiContext);
    return
}