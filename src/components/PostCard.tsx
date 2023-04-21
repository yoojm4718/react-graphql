import styled from "styled-components";
import { IPost } from "../schema";
import { Link } from "react-router-dom";
import { gql } from "@apollo/client";

export const POST_DETAILS = gql`
  fragment PostDetails on Post {
    title
    likes
    author {
      id
      username
      profileImg
    }
  }
`;

interface IProps {
  post: IPost;
}

function PostCard({
  post: {
    id,
    title,
    likes,
    author: { id: authorId, username, profileImg },
  },
}: IProps) {
  return (
    <CardContainer to={`post/${id}`}>
      <DetailsContainer>
        <h2>{title}</h2>
        <span>Likes: {likes}</span>
        <Author to={`/user/${authorId}`}>
          <img src={profileImg || "blankProfile.png"} alt={`profile-${id}`} />
          <span>{username}</span>
        </Author>
      </DetailsContainer>
    </CardContainer>
  );
}

const CardContainer = styled(Link)`
  padding: 30px 20px;

  background-color: white;
  border-radius: 20px;

  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.1);

  color: black;
  text-decoration: none;

  transition: box-shadow 0.1s ease-in-out;

  &:hover {
    box-shadow: 0px 10px 15px rgba(0, 0, 0, 0.1);
  }
`;

const DetailsContainer = styled.div`
  & h2 {
    font-size: 30px;
    font-weight: 700;
    margin-bottom: 10px;
  }

  & span {
    font-weight: 300;
  }
`;

export const Author = styled(Link)`
  display: flex;
  align-items: center;
  gap: 5px;
  margin-top: 10px;

  width: max-content;

  color: black;
  text-decoration: none;

  & img {
    border-radius: 50%;
    width: 25px;
    aspect-ratio: 1 / 1;
  }

  & span {
    font-size: 15px;
    margin: 0;
  }
`;

export default PostCard;
