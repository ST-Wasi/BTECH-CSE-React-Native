import React from 'react'
import { useRef, Suspense, lazy } from 'react'
import { useState, useEffect } from 'react'
import Loading from './components/Loading'
const LazyHero = lazy(() => import("./components/Hero"))

function App() {
  const [count, setCount] = useState(0)
  const [name, setName] = useState("")
  const heading = useRef(null)

  return (
    <Suspense fallback={<Loading />}>

      <h1 ref={heading}>Hello world {count}</h1>
      <button onClick={() => {
        setCount(count + 1)
        console.log(heading.current.innerText)
      }}>Change</button>
      <LazyHero />
      <Loading count={count} setName={setName} />
    </Suspense>
  )
}

export default App
