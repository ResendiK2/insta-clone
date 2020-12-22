/* eslint-disable jsx-a11y/alt-text */
import { useState } from 'react';
import LikeButton from './../likeButton';
import Comment from './../comment';
import Avatar from './../avatar';

import styles from './styles.module.css';

import { format } from "date-fns";
import { ptBR } from 'date-fns/locale'

import { FaPlus } from "@react-icons/all-files/fa/FaPlus";

const Post = (props) => {
  const [comments, setComments] = useState(props.comments);
  const [commentQuantity, setCommentQuantity] = useState(3);

  const addNewComment = (comment) => {
    const commentList = [...comments]
    commentList.push(comment);
    setComments(commentList);
  }

  const newYears = new Date(props.created_at);
  const formattedDate = format(newYears, "dd/MMM", { locale: ptBR });

  return (
    <article className={styles.post}>
      <header className={styles.header}>
        <Avatar
          userName={props.user.name}
          imageUserUrl={props.user.avatar}
          date={formattedDate}
        />
      </header>

      <main>
        <div className={styles.imageContainer}>
          <img
            src={props.imageUrl}
            className={styles.image}
            alt={props.title}
          />
        </div>

        <div>
          <LikeButton
            likes={props.like}
            id={props.id}
          />
        </div>

        <div className={styles.imageDescription}>
          <small
            className={styles.description}
          >
            <b>{props.user.name}:</b> {props.description}
          </small>
        </div>

        <div>
          {comments.length > 0 ? <p className={styles.commentsTitle}>Comentários:</p> : null}
          {comments.slice(0, commentQuantity).map((comment) => {
            return (
              <div className={styles.comments}>
                <small
                  key={comment.id}
                >
                  {comment.text}
                </small>
              </div>
            )
          })}

          {commentQuantity < comments.length && (
            <div className={styles.moreComments}>
              <button
                className={styles.moreCommentsButton}
                onClick={() => setCommentQuantity(commentQuantity + 3)}
              >
                <FaPlus size="15" color="#67bdf7" />
              </button>

              <p className={styles.moreCommentsDescription}> {comments.length - commentQuantity} comentários ocultos</p>
            </div>
          )}
        </div>

      </main>

      <footer className={styles.footer}>
        <Comment
          postId={props.id}
          addNewComment={addNewComment}
        />
      </footer>
    </article>
  );
};

export default Post;
