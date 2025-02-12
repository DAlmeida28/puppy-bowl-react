import {useState} from 'react'
import { Link } from 'react-router-dom';

const AddPlayer = () => {

  const [nameInput, setNameInput] = useState('');
  const [breedInput, setBreedInput] = useState('');
  const [statusValue, setStatusValue] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [teamId, setTeamId] = useState('');

  const submitPlayer = async (event) => {
    event.preventDefault();
    
    const submission = await fetch('https://fsa-puppy-bowl.herokuapp.com/api/2501-ftb-et-web-ft/players', {
      method: 'POST',
      headers:{
      "Content-type": "application/json",
      },
      body: JSON.stringify({
        name: nameInput,
        breed: breedInput,
        status: statusValue,
        imgUrl: imageUrl,
        teamId: teamId
      })
    })
   
  }

  return(
    <>
    <h1>Add Player</h1>
    <form onSubmit={submitPlayer} id="SubmitPlayer">
      <input placeholder="Name" 
      onChange={((event) => {
        setNameInput(event.target.value); console.log(nameInput)
      })}/>
      <input placeholder="Breed"
      onChange={((event) => {
        setBreedInput(event.target.value)
      })}/>
      <label htmlFor="status">Choose a status:</label>
      <select onChange={((event) => {setStatusValue(event.target.value)})} name="status" id="status">
        <option value="bench">Bench</option>
        <option value="field">Field</option>
      </select>
      <input onChange={((event) => {setImageUrl(event.target.value)})}placeholder="ImageURL" />
      <input onChange={((event) => {setTeamId(event.target.value)})}placeholder="teamId" />
      <button>Submit</button>
    </form>
    <Link to='/'>Back to Player</Link>
    </>
  )
}

export default AddPlayer