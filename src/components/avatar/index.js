/* eslint-disable no-lone-blocks */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/alt-text */
import styles from './styles.module.css';
import AvatarNone from '../../public/avatar-none.png';

const Avatar = (props) => {
    let avatar;
    { props.imageUserUrl ? avatar = props.imageUserUrl : avatar = AvatarNone }
    return (
        <div className={styles.content}>
            <div className={styles.background}>
                <img
                    src={avatar}
                    className={styles.image}
                    alt={"post-image" + props.imageTitle}
                />
            </div>

            <div className={styles.info}>
                <strong className={styles.name}> {props.userName}</strong>
                <p className={styles.date}>{props.date}</p>
            </div>
        </div>
    )
}

export default Avatar;