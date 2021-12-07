import React, { createContext, useState  } from "react";

export const Context = createContext();

const Provider = ({ children }) => {
    const [isLogged, setLogged] = useState(() => {
        const value = localStorage.getItem("isLogged");

        if (value === "true") {
            return true;
        }
        return false;
    });
    const value = {
        isLogged,
        setLogged: (value) => {
            setLogged(value);
            localStorage.setItem("isLogged", value);
        }
    }

    return (
        <Context.Provider value={value}>
            {children}
        </Context.Provider>
    )
}

export default Provider;