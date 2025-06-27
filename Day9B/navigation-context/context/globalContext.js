import { createContext, useState } from "react";

export const GlobalContext = createContext({});

function GlobalProvider({ children }) {
  function doSomething() {
    console.log("Doing SOmething from Context File");
  }
  const [count, setCount] = useState(0);
  let values = {
    doSomething,
    count,
    setCount,
  };
  return (
    <GlobalContext.Provider value={values}>{children}</GlobalContext.Provider>
  );
}

export default GlobalProvider;
