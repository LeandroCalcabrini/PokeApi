import { useState } from 'react'
import MostrarPokemons from './assets/components/MostrarPokemons'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <MostrarPokemons/>

    </>
  )
}

export default App
