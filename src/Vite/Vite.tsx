import { Suspense, lazy } from 'react'
import reactLogo from '../assets/react.svg'
import './App.css'
import './index.css'



export function delay(ms: number) { return new Promise(resolve => setTimeout(resolve, ms)) }

// Works also with SSR as expected
const Card = lazy(() => delay(3000).then(() => import('./Card')))

function App() {
  return (
    <main className='vite'>
        <div>
            <a href="https://vitejs.dev" target="_blank">
              <img src="/vite.svg" className="logo" alt="Vite logo" />
            </a>
            <a href="https://reactjs.org" target="_blank">
              <img src={reactLogo} className="logo react" alt="React logo" />
            </a>
        </div>
        <h1>Vite + React</h1>

        <Suspense fallback={<p style={{ color: "red" }}>Loading card component...</p>}>
          <Card />
        </Suspense>

        <p className="read-the-docs">
          Click on the Vite and React logos to learn more
        </p>
    </main>
  )
}

export default App
