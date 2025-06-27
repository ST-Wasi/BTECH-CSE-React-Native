import { createContext, useState } from "react";

export const NewContext = createContext({});

function NewProvider({ children }) {
  const [count, setCount] = useState(0);
  function doSomething() {
    console.log("DOing SOmething from Context File");
  }

  let values = {
    doSomething,
    count,
    setCount,
  };
  return <NewContext.Provider value={values}>{children}</NewContext.Provider>;
}

export default NewProvider;
