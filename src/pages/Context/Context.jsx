import React, { useState, createContext } from 'react';

   const Context = createContext();

function ContextProvider({ children }) {
  const [nav, setNav] = useState(false);

  return (
    <Context.Provider value={{ nav, setNav }}>
      {children}
    </Context.Provider>
  );
}

export {Context}
export default ContextProvider;