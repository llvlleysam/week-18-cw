import { createContext, useState } from "react"

export const RootContext= createContext()

export default function ContextProvider({children}) {
    const[showModal,setShowModal]=useState(false)
    const[showCheckOut,setShowCheckOut]=useState(false)
  return (
    <div>
        <RootContext.Provider value={{showModal,setShowModal,showCheckOut,setShowCheckOut}}>
            {children}
        </RootContext.Provider>
      
    </div>
  )
}
