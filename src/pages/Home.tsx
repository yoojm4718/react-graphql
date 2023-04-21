import { gql, useQuery } from "@apollo/client";
import { IPosts } from "../schema";
import styled from "styled-components";
import PostCard, { POST_DETAILS } from "../components/PostCard";

const GET_ALL_POSTS = gql`
  ${POST_DETAILS}
  query {
    posts {
      id
      ...PostDetails
    }
  }
`;

function Home() {
  const { data, loading } = useQuery<IPosts>(GET_ALL_POSTS);

  return (
    <Container>
      {loading ? (
        <Loading>게시물 로드중...</Loading>
      ) : (
        <PostsGrid>
          {data?.posts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </PostsGrid>
      )}
    </Container>
  );
}

const Loading = styled.h3`
  text-align: center;

  font-size: 30px;
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
`;

const PostsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: max-content;
  gap: 20px;
`;

export default Home;
