import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from '../actions/posts';
import Page from './Page';
import Post from './Post';

const PostsList = () => {
  const posts = useSelector(state => state.posts);
  const dispatch = useDispatch();
  
  React.useEffect(() => {
    setIsLoading(true)
    dispatch(fetchPosts())
  }, []);

  React.useEffect(() => {
    if (posts) setIsLoading(false)
  }, [posts]);

  const [isLoading, setIsLoading] = React.useState(false);

  return (
    <Page title="Posts">
      <ul className="posts-list">
        {isLoading && <div className="mt-10"><i className="fas fa-circle-notch fa-spin loader"></i></div>}
        {posts && posts.data.map((post) => (
          <li
            key={post.id}
            className="post"
          >
            <Post data={post} />
          </li>
        ))}
        {posts && posts.total === 0 && 
          <li
            className="post"
          >
            <p className="posted-by">Sin resultados..</p>
          </li>
        }
      </ul>
    </Page>
  );
};

export default PostsList;