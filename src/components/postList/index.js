import Post from '../post';
import styles from './styles.module.css';

const PostList = (props) => {
  return (
    <main className={styles.wrapper}>
      <div className={styles.list}>
        {props.posts.map((item) => (
          <Post
            key={item.id}
            /*
            Poderia substituir todos as props a baixo 
            passando as informações do post da seguinte forma:
                            post={post}  
            
              userName={post.user.name}
              imageUserUrl={post.user.avatar}
              imageUrl={post.imageUrl}
              imageDescription={post.description}
              post={post.id} 
            */

            {...item}
          /* Esta é uma outra forma de passar as props, 
          só que neste modelo, diferente do post={post}, 
          elas ja vão desestruturadas*/
          />
        ))}
      </div>
    </main>
  );
};
export default PostList;
