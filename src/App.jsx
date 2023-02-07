import { useState } from 'react'
import Player from "./components/Player"
import Playlist from "./components/Playlist"
import { Routes, Route } from "react-router-dom"
import HomePage from "./Pages/HomePage"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="App">
      <h1>MP3 Player</h1>
    </div>

    <Routes>
      <Route path="/" element={<HomePage></HomePage>}>
        <Route index element={<span>Bem vindo</span>}></Route>
        <Route path="musica" element={<Player song={"Isto é uma música"}/>} />
        <Route path="playlist" element={<Playlist/>} />
      </Route>
    </Routes>

    </>
  )
}

export default App
