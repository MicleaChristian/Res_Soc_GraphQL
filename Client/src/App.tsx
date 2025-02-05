import { useQuery } from '@apollo/client'
import { Link } from 'react-router'
import './App.css'
import { graphql } from './gql'

const getCharacters = graphql(`
query GetCharacters($page: Int) {
  characters(page: $page) {
    info {
      next
    }
    results {
      id
      name
      image
    }
  }
}  
`)

function App() {
  const {data, error, loading, refetch} = useQuery(getCharacters)


  console.log(data)
  console.log(error);

  if(loading) return <div>loading</div>

  if (error || !data) return <div>error</div>

  const onLoadMore = () => {
    refetch({page: data.characters?.info?.next})
  }

  return (
    <>
      {data.characters?.info?.next && <button onClick={onLoadMore}>load more</button>}
      <ul>
        {(data.characters?.results ?? [])
          .filter(character => character !== null)
          .map(character => <li key={character.id}>
            <Link to={`/${character.id}`}>
              <div>
                <img src={character.image ?? ''} alt={character.name ?? ''} />
                <p>{character.name}</p>
              </div>
            </Link>
          </li>)}
      </ul>
    </>
  )
}

export default App
