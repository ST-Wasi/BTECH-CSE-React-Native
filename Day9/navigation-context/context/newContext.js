import { createContext } from "react";

export const GlobalContext = createContext({});

function GlobalProvider({ children }) {
  function doSomething() {
    console.log("Doing Something");
  }
  let values = {
    doSomething,
  };
  return (
    <GlobalContext.Provider value={values}>{children}</GlobalContext.Provider>
  );
}

export default GlobalProvider;
