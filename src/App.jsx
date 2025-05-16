import { Route, Routes } from 'react-router-dom'
import './App.css'
import PlayerLayout from './Layouts.jsx/PlayerLayout'
import Home from './components/pages/Home'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<PlayerLayout><Home /></PlayerLayout>}/>
        <Route path="/search" element={<PlayerLayout>search</PlayerLayout>}/>
        <Route path="/library" element={<PlayerLayout>library</PlayerLayout>}/>
      </Routes>
    </>
  )
}

export default App
