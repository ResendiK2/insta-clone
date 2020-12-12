/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/alt-text */
import styles from './styles.module.css';

const Avatar = (props) => {
    return (
        <div className={styles.content}>
            <div className={styles.background}>
                <img
                    src={props.imageUserUrl}
                    className={styles.image}
                    alt={"post-image" + props.imageTitle}
                />
            </div>

            <div>
                <strong className={styles.name}> {props.userName}</strong>
            </div>
        </div>
    )
}

export default Avatar;