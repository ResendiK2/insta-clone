import styles from './styles.module.css';

const userName = localStorage.getItem("userName");

function Footer(props) {

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>

        <strong>{userName}</strong>
        <a
          href='https://appmasters.io/'
          target='_blank'
          rel='noreferrer'
        >
          App Masters
      </a>
        <a
          href='https://codejr.com.br/'
          target='_blank'
          rel='noreferrer'
        >
          Code Júnior
      </a>
        <a
          href='https://github.com/app-masters-academy/code-instagram-clone'
          target='_blank'
          rel='noreferrer'
        >
          GitHub
      </a>

      </div>
    </footer>
    /* props.posts.map((item) => ({})) */

  );
}

export default Footer;
