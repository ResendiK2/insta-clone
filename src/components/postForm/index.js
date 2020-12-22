/* eslint-disable jsx-a11y/alt-text */
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { API } from "../../api";

import styles from './styles.module.css';
import Header from '../header/index';
import Footer from '../footer/index';

import AvatarNone from '../../public/avatar-none.png';

import { FaArrowLeft } from "@react-icons/all-files/fa/FaArrowLeft";

import { Link } from "react-router-dom";

const PostForm = () => {
    const history = useHistory();

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [imageUrl, setImageUrl] = useState("");

    const [error, setError] = useState();
    const [loading, setLoading] = useState(false);

    const userName = localStorage.getItem("userName");

    const handlePost = async () => {
        const body = {
            title,
            description,
            imageUrl,
        };
        try {
            setLoading(true);
            const response = await API.post("/posts", body);
            if (response.data.id) {
                history.push('/');
            }
        } catch (error) {
            console.error(error);
            setError(error);
            setLoading(false);
        }
    };

    return (
        <>
            <Header />

            <main className={styles.content}>
                <div className={styles.form}>
                    <div className={styles.header}>
                        <Link
                            to="/"
                            className={styles.buttonBack}
                        >
                            <FaArrowLeft size={20} color="black"
                            />
                        </Link>
                        <div className={styles.title}>
                            <h2>Post Form</h2>
                        </div>
                    </div>
                    <input
                        className={styles.input}
                        placeholder="Título"
                        value={title}
                        disabled={loading}
                        onChange={(event) => setTitle(event.target.value)}
                    />
                    <input
                        className={styles.input}
                        placeholder="Mensagem"
                        value={description}
                        disabled={loading}
                        onChange={(event) => setDescription(event.target.value)}
                    />
                    <input
                        className={styles.input}
                        placeholder="Url da Imagem"
                        value={imageUrl}
                        disabled={loading}
                        onChange={(event) => setImageUrl(event.target.value)}
                    />
                    <div className={styles.example}>
                        <div className={styles.headerExample}>
                            <img
                                src={AvatarNone}
                                className={styles.avatarImage}
                            />

                            <p className={styles.description}><b>{userName}</b></p>
                        </div>
                        <div className={styles.imageContainer}>
                            {imageUrl && imageUrl.length > 5 && (
                                <img
                                    src={imageUrl}
                                    className={styles.image}
                                />
                            )}
                        </div>
                        <div className={styles.descriptionBox}>
                            {description && (
                                <div className={styles.descriptionBoxIf}>
                                    <p className={styles.description} ><b>{userName}: </b>{description}</p>
                                </div>
                            )}
                        </div>
                    </div>
                    {error && <p>{error}</p>}
                    <button
                        disabled={loading}
                        className={styles.buttonSend}
                        onClick={handlePost}
                    >
                        Postar
                    </button>
                </div>
            </main>

            <Footer />

        </>
    );
};

export default PostForm;
