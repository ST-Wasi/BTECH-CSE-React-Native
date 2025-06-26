import { createContext } from "react";

export const GlobalContext = createContext({});

function generateRandomNumber() {
  console.log("Number Generated");
}
function GlobalProvider({ children }) {
  return (
    <GlobalContext.Provider value={{ generateRandomNumber }}>
      {children}
    </GlobalContext.Provider>
  );44
}

export default GlobalProvider;
