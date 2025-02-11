import { Route, Routes } from 'react-router-dom'
import { useState } from 'react'

import ListPuppies from './ListPuppies.jsx'
import PuppyDetails from './PuppyDetails.jsx'

function App() {

  const [singlePuppy, setSinglePuppy] = useState({});

  return (
    <>

    
    <Routes>
      <Route path="/" element={<ListPuppies setSinglePuppy={setSinglePuppy}/>} />
      <Route path="/puppydetails/:puppyID" element={<PuppyDetails singlePuppy={singlePuppy}/>}/>
    </Routes>
    </>
  )
}

export default App
