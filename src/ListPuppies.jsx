import { useEffect, useState } from "react"

const ListPuppies = () => {
  const [allPuppies, setAllPuppies] = useState([]);

useEffect(() => {
  const getPuppies = async() => {
    const response = await fetch('https://fsa-puppy-bowl.herokuapp.com/api/2501-ftb-et-web-ft/players')
    const playersObject = await response.json();
    setAllPuppies(playersObject.data.players)
  }
  getPuppies();
}, [])

  return (<>
  <h1>List of Puppies: </h1>
  {allPuppies.map((puppy) => {
    console.log(puppy)
    return <ul>
      <li key={puppy.id}>
        Name: {puppy.name}
        <p>Team: {puppy.teamId}</p>
        </li>
      <img src={puppy.imageUrl} height="200px" width="200px"/>
    </ul>
  })}
    </>
  )
}

export default ListPuppies