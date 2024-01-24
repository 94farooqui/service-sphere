import React, { Children, createContext, useState } from 'react'

const HeaderContext = createContext()

export const HeaderContextProvider = ({children}) => {
    const [headerText,setHeaderText] = useState('')

  return (
    <HeaderContext.Provider value={{headerText,setHeaderText}}>
        {children}
    </HeaderContext.Provider>
  )
}

export default HeaderContext