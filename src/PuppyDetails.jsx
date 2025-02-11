import { useNavigate } from "react-router-dom"

const PuppyDetails = ({singlePuppy}) => {
  const navigate = useNavigate();
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
    </>
  )
}

export default PuppyDetails