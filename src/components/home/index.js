import React, { useState, useEffect } from "react";

import '../../App.css';
import Footer from "../footer/index";
import PostList from "../postList/index";
import Header from '../header/index';

import styles from './styles.module.css';

import { API } from "../../api";

function Home(props) {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState();
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        setLoading(true);
        API.get("/posts")
            .then((response) => {
                setPosts(response.data);

                setLoading(false);
            })
            .catch((apiError) => {
                setLoading(false);
                setError(apiError.response.data.error);
            });
    }, []);

    return (
        <div className="App">

            <Header posts={posts} />

            { !loading ?

                <PostList posts={posts} />

                :
                <div className={styles.boxLoading}>
                    <p>Carregando...</p>
                </div>
            }

            {error && <p>{error}</p>}

            <Footer />

        </div >
    );
}

export default Home;
