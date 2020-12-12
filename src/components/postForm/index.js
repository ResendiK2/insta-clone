/* eslint-disable jsx-a11y/alt-text */
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { API } from "../../api";

import styles from './styles.module.css';

import { FaArrowLeft } from "@react-icons/all-files/fa/FaArrowLeft";

import { Link } from "react-router-dom";

const PostForm = () => {
    const history = useHistory();

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [imageUrl, setImageUrl] = useState("");

    const [error, setError] = useState();
    const [loading, setLoading] = useState(false);

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
        <main className={styles.content}>
            <div className={styles.form}>
                <Link
                    to="/"
                    className={styles.buttonBack}
                >
                    <FaArrowLeft size={23} color="black"
                    />
                </Link>
                <h1>Post Form</h1>
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
                {imageUrl && imageUrl.length > 5 && (
                    <img
                        src={imageUrl}
                        className={styles.image}
                    />
                )}
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
    );
};

export default PostForm;
