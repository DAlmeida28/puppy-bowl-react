import { Route, Routes } from 'react-router-dom'
import { useState } from 'react'

import ListPuppies from './ListPuppies.jsx'
import PuppyDetails from './PuppyDetails.jsx'
import AddPlayer from './add-player.jsx'

function App() {

  const [singlePuppy, setSinglePuppy] = useState({});

  return (
    <>

    
    <Routes>
      <Route path="/" element={<ListPuppies setSinglePuppy={setSinglePuppy}/>} />
      <Route path="/puppydetails/:puppyID" element={<PuppyDetails singlePuppy={singlePuppy}/>}/>
      <Route path="/addplayer" element={<AddPlayer />} />
    </Routes>
    </>
  )
}

export default App
