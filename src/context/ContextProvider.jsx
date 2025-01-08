import { createContext, useState } from "react";

export const Context = createContext();

export const ContextProvider = ({ children }) => {
  const [state, setState] = useState("");

  return <Context.Provider value={{}}>{children}</Context.Provider>;
};
