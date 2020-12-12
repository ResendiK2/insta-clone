import Post from '../post';
import styles from './styles.module.css';

const PostList = (props) => {
  return (
    <main className={styles.wrapper}>
      <div className={styles.list}>
        {props.posts.map((post) => (
          <Post
            key={post.id}
            userName={post.user.name}
            imageUserUrl={post.user.avatar}
            imageUrl={post.imageUrl}
            imageDescription={post.description}
            post={post.id}
          />
        ))}
      </div>
    </main>
  );
};

export default PostList;
