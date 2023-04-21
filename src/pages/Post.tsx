import { gql, useQuery } from "@apollo/client";
import { Author, POST_DETAILS } from "../components/PostCard";
import { IPostById } from "../schema";
import { useParams } from "react-router-dom";
import styled from "styled-components";

const POST_DETAIL_WITH_CONTENT = gql`
  ${POST_DETAILS}
  query getPost($postId: ID!) {
    postById(postId: $postId) {
      id
      content
      ...PostDetails
    }
  }
`;

function Post() {
  const { id } = useParams();
  const { data, loading } = useQuery<IPostById>(POST_DETAIL_WITH_CONTENT, {
    variables: {
      postId: id,
    },
  });

  return (
    <CardContainer>
      {loading ? (
        <h1>로딩중...</h1>
      ) : (
        <>
          <h1>{data?.postById.title}</h1>
          <small>Likes: {data?.postById.likes}</small>
          <Author to={`/user/${data?.postById.author.id}`}>
            <img
              src={data?.postById.author.profileImg || "blankProfile.png"}
              alt={`profile-${data?.postById.author.id}`}
            />
            <span>{data?.postById.author.username}</span>
          </Author>
          <p>{data?.postById.content}</p>
        </>
      )}
    </CardContainer>
  );
}

const CardContainer = styled.div`
  padding: 30px 20px;

  background-color: white;
  border-radius: 20px;

  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.1);

  color: black;
  text-decoration: none;

  transition: box-shadow 0.1s ease-in-out;

  & h1 {
    font-size: 30px;
    font-weight: 800;
    margin-bottom: 20px;
  }

  & p {
    margin-top: 30px;
  }

  &:hover {
    box-shadow: 0px 10px 15px rgba(0, 0, 0, 0.1);
  }
`;

export default Post;
