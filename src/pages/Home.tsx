import { gql, useQuery } from "@apollo/client";

const GET_ALL_POSTS = gql`
  query {
    posts {
      id
      title
      likes
      author {
        username
        profileImg
      }
    }
  }
`;

interface IPosts {
  posts: [
    {
      id: string;
      title: string;
      likes: number;
      author: {
        username: string;
        profileImg: null | string;
      };
    }
  ];
}

function Home() {
  const { data, loading } = useQuery<IPosts>(GET_ALL_POSTS);

  if (loading) return <h3>Loading...</h3>;

  return (
    <div>
      {data?.posts.map(
        ({ id, title, likes, author: { username, profileImg } }) => (
          <div key={id}>
            <h2>{title}</h2>
            <small>{likes}</small>
            <span>{username}</span>
          </div>
        )
      )}
    </div>
  );
}

export default Home;
