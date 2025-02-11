import { Route, Routes } from 'react-router-dom'
import { useState } from 'react'

import ListPuppies from './ListPuppies.jsx'
import PuppyDetails from './PuppyDetails.jsx'
import AddPlayer from './add-player.jsx'
import PuppySearch from './PuppySearch.jsx'

function App() {

  const [allPuppies, setAllPuppies] = useState([]);
  const [singlePuppy, setSinglePuppy] = useState({});

  return (
    <>
  
    <PuppySearch allPuppies={allPuppies} setSinglePuppy={setSinglePuppy} />

    <Routes>
      <Route path="/" element={<ListPuppies setSinglePuppy={setSinglePuppy} allPuppies={allPuppies} setAllPuppies={setAllPuppies}/>} />
      <Route path="/puppydetails/:puppyID" element={<PuppyDetails singlePuppy={singlePuppy}/>}/>
      <Route path="/addplayer" element={<AddPlayer />} />
    </Routes>
    </>
  )
}

export default App
