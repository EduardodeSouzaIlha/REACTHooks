import React from 'react'
import { createContext } from 'react'
export const SomeContext = createContext()

export const HookUseContext = ({children}) =>{
    const contextValue = "testing context"
    const context = " hello"
    return (
        <SomeContext.Provider value={{contextValue, context}}>
            {children}
        </SomeContext.Provider>
    )
}