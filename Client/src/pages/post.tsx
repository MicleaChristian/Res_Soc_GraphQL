import { gql, useQuery } from "@apollo/client";
import { useParams } from "react-router";

const GET_POSTS = gql`
  query GetCharacter($id: ID!) {
    character(id: $id) {
      id
      name
      image
      status
      type
    }
  }
`;

const Posts = () => {
  const { id } = useParams();
  const { loading, error, data } = useQuery(GET_POSTS, {
    variables: { id },
  });

  if (loading) return <p>Loading...</p>;
  if (error)
    return (
      <p
        className="center align-center justify-center w-full h-full
  "
      >
        Error : {error.toString()}
      </p>
    );

  return <div>{data.character.name}</div>;
};

export default Posts;
