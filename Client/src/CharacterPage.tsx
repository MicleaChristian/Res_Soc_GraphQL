import { useQuery } from "@apollo/client"
import { useParams } from "react-router"
import { graphql } from "./gql"

const getCharacterById = graphql(`
query GetCharacter($id: ID!) {
  character(id: $id) {
    id
    name
    image
    status
    type
    gender
  }
}  
`)

const CharacterPage = () => {
  const {id} = useParams()
  if(!id) throw new Error('params.id is not defined')

  const {data, error, loading} = useQuery(getCharacterById, {variables: {id}})
  console.log(data)

  if (loading) return <div>loading</div>
  if (error || !data?.character) return <div>error</div>
  const {character: {image, name, gender}} = data
  return (
    <div>
      <img src={image ?? ''} alt={name ?? ''} />
      <p>nom: {name}</p>
      <p>genre: {gender}</p>
    </div>  
  )
}

export default CharacterPage