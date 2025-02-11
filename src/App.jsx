import { Route, Routes } from 'react-router-dom'

import ListPuppies from './ListPuppies.jsx'
function App() {

  return (
    <>
    <h1>HELLo</h1>
    <Routes>
      <Route path="/" element={<ListPuppies />} />
    </Routes>
    </>
  )
}

export default App
