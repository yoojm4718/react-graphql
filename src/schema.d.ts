interface IPost {
  id: string;
  title: string;
  likes: number;
  author: IUser;
}

interface IUser {
  id: string;
  profileImg: null | string;
  username: string;
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

interface IUserWithPosts {
  userById: IUser;
  postsByUserId: IPost[];
}

export { IPost, IPosts, IPostWithContent, IPostById, IUserWithPosts };
