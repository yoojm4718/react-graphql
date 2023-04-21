import { gql, useQuery } from "@apollo/client";
import PostCard, { POST_DETAILS } from "../components/PostCard";
import { IUserWithPosts } from "../schema";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import blankProfile from "../assets/blankProfile.png";

const USER_WITH_POSTS = gql`
  ${POST_DETAILS}
  query getUser($userId: ID!) {
    userById(userId: $userId) {
      profileImg
      username
    }

    postsByUserId(userId: $userId) {
      id
      ...PostDetails
    }
  }
`;

function User() {
  const { id } = useParams();
  const { data, loading } = useQuery<IUserWithPosts>(USER_WITH_POSTS, {
    variables: {
      userId: id,
    },
  });

  return (
    <Container>
      {loading ? (
        <h1>로딩중...</h1>
      ) : (
        <>
          <ProfileContainer>
            <img
              src={data?.userById.profileImg || blankProfile}
              alt={`profile-${id}`}
            />
            <h3>{data?.userById.username}</h3>
          </ProfileContainer>
          <h2>{data?.userById.username}의 게시물</h2>
          <PostsGrid>
            {data?.postsByUserId.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </PostsGrid>
        </>
      )}
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100%;

  & > h2 {
    font-size: 25px;
    font-weight: 800;
    margin-bottom: 20px;
    text-align: center;
  }
`;

const ProfileContainer = styled.section`
  display: flex;
  align-items: center;
  margin-bottom: 50px;
  gap: 30px;

  & img {
    width: 150px;
    aspect-ratio: 1 / 1;
    border-radius: 50%;
  }

  & h3 {
    font-size: 40px;
    font-weight: 700;
  }
`;

const PostsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: max-content;
  gap: 20px;
`;

export default User;
