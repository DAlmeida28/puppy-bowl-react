import { useEffect } from "react"
import { Link, useNavigate } from 'react-router-dom'

const ListPuppies = ({setSinglePuppy, allPuppies, setAllPuppies}) => {
  const navigate = useNavigate();

  useEffect(() => {
    const getPuppies = async () => {
      const response = await fetch('https://fsa-puppy-bowl.herokuapp.com/api/2501-ftb-et-web-ft/players')
      const playersObject = await response.json();
      setAllPuppies(playersObject.data.players)
    }
    getPuppies();
  }, [])

  return (<>
    <section id="header">
    <h1>List of Puppies: </h1>
    </section>
    <p><Link to='/addplayer'>Add player</Link></p>

    <ul id="PuppyList">
    {allPuppies.map((puppy) => {
      
      return(
        <li key={puppy.id}
            onClick={() => {
              setSinglePuppy(puppy);
              navigate(`/puppydetails/${puppy.id}`)
            } 
            }
        >
          Name: {puppy.name}
          <p>Team: {puppy.teamId}</p>
          <img src={puppy.imageUrl} height="200px" width="200px" />
        </li>)
    })}
    </ul>
  </>
  )
}

export default ListPuppies