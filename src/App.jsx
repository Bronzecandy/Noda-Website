import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Components/Header'
import Banner from './Components/Banner'
import Introduce from './Components/Introduce'

function App() {
  const [count, setCount] = useState(0)
  return (
    <div className='w-[100vw] h-[100vh]'>
      <Header/>
      <Banner/>
      <div className=" bg-[url('/image/bg_content.png')] bg-center bg-no-repeat bg-cover">
        <Introduce />
      </div>
    </div>
  )
}

export default App
