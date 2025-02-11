import { useState } from "react"
import { useNavigate } from "react-router-dom"

const PuppySearch = ({allPuppies, setSinglePuppy}) => {

  const [searchInput, setSearchInput] = useState('');
  const [puppyMatch, setPuppyMatch] = useState(true);

  const navigate = useNavigate();

  const searchPuppy = (event) => {
    event.preventDefault();

    allPuppies.filter((puppy) => {
     if(puppy.name === searchInput){
      setSinglePuppy(puppy);
      navigate(`/puppydetails/${puppy.id}`)
     }else {
      setPuppyMatch(false);
     }
    }
    )
  }

  return(
    <>
    <h1>Search</h1>
    <form onSubmit={(searchPuppy)}>
    <input
    onChange={(event) => {setSearchInput(event.target.value)}}
    placeholder="Search for player/puppy"></input>
    {puppyMatch ? null : <p>No Puppy Match Found.</p>}
    <button>Search</button>
    </form>
    </>
  )
}

export default PuppySearch