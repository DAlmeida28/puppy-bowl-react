import { useNavigate } from "react-router-dom"

const PuppyDetails = ({singlePuppy}) => {
  const navigate = useNavigate();

  const deletePuppy = async (event) => {
    event.preventDefault();

    const removePuppy = await fetch (`https://fsa-puppy-bowl.herokuapp.com/api/2501-ftb-et-web-ft/players/${singlePuppy.id}`, {
      method: 'DELETE',
    })
     const x = await removePuppy.json();
     console.log(x);

  }
  return(
    <>
    {console.log(singlePuppy)}
    <h1>Player Stats:</h1>
    <p><img src={singlePuppy.imageUrl} height="800px" width="800px"/></p>
    <h3>Name: {singlePuppy.name}</h3>
    <h3>Breed: {singlePuppy.breed}</h3>
    <h3>Status: {singlePuppy.status}</h3>
    <h3>Team ID: {singlePuppy.teamId}</h3>

    <button onClick={() => {navigate('/')}}>
    Go back to player list</button>

    <button onClick={(deletePuppy)}>Delete Puppy</button>
    </>
  )
}

export default PuppyDetails