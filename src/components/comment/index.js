import { useState } from 'react';
import styles from './styles.module.css';
import classNames from 'classnames';
import { API } from "../../api";

import { FaRegComment } from "@react-icons/all-files/fa/FaRegComment";

const Comment = props => {
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

  const handleComment = async () => {
    try {
      setLoading(true);
      const body = {
        text,
        post_id: props.postId
      }
      const result = await API.post('/comments', body);
      if (result) {
        console.log(result.data);
        setText('');
        props.addNewComment(result.data);
      }
      setLoading(false);
    } catch (err) {
      setError(error);
      setLoading(false);
    }
  }

  return (
    <div className={styles.comment}>
      <FaRegComment size={18} color="rgb(170, 170, 170)" />
      <input
        className={styles.input}
        type={'text'}
        placeholder="Comentar agora"
        value={text}
        onChange={event => setText(event.target.value)}
        disabled={loading}
      />
      <button
        onClick={handleComment}
        /* Logica para não aceitar comentarios sem conteudo e ficar
         desabilitado quando o comentario estiver sendo enviado */
        disabled={loading || !text}

        /* Logica para o botão ficar habilitado para comentarios 
        apenas quando este tiver conteudo para ser postado */
        className={text ? classNames(styles.button) : classNames(styles.buttonDisable)}

      >
        Enviar
      </button>
    </div>
  );
};

export default Comment;
