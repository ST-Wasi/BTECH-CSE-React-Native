import { useState, Suspense, lazy } from 'react'
import './App.css'
// import Header from './components/Header'
const LazyHeader = lazy(() => import("./components/Header"))
import Loading from './components/Loading'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Suspense fallback={<Loading />}>
      <LazyHeader />
      <h1>Content Render</h1>
    </Suspense>
  )
}

export default App
