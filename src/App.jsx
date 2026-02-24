
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import { Header } from "./components/Header"
import { SideNav } from "./components/SideNav"
import { PokeCard } from "./components/PokeCard"

import { useState } from 'react'



function App() {
    const [selectedPokemon, setSelectedPokemon] = useState(2);


  return (
    <>
        <Header/>
        <SideNav selectedPokemon={selectedPokemon} setSelectedPokemon={setSelectedPokemon}/>
        <PokeCard selectedPokemon={selectedPokemon}/>
    </>
  )
}

export default App
