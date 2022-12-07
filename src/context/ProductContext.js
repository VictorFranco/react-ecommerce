import React, {useState} from 'react'

const Context = React.createContext()

export function ProductContextProvider ({children}) {
  const [product, setProduct] = useState({})
  return <Context.Provider value={{product, setProduct}}>
    {children}
  </Context.Provider>
}

export default Context
