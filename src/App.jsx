import { useState } from 'react'

import './App.css'
import Vcard from './Components/Vcard/Vcard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Vcard />
    </>
  )
}

export default App
