/* eslint-disable jsx-a11y/alt-text */
import Comment from './../comment';
import Avatar from './../avatar';
import styles from './styles.module.css';

const Post = (props) => {
  console.log('post props', props);
  return (
    <article className={styles.post}>
      <header className={styles.header}>
        <Avatar
          userName={props.userName}
          imageUserUrl={props.imageUserUrl}
        />
      </header>
      <img src={props.imageUrl} className={styles.image} />
      <p>{props.imageDescription}</p>
      <footer className={styles.footer}>
        <Comment />
      </footer>
    </article>
  );
};

export default Post;
