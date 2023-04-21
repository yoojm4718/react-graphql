interface IPost {
  id: string;
  title: string;
  likes: number;
  author: {
    id: string;
    username: string;
    profileImg: null | string;
  };
}

interface IPostWithContent extends IPost {
  content: string;
}

interface IPosts {
  posts: IPost[];
}

interface IPostById {
  postById: IPostWithContent;
}

export { IPost, IPosts, IPostWithContent, IPostById };
