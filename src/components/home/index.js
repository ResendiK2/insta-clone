import React, { useState, useEffect } from "react";

import '../../App.css';
import Footer from "../footer/index";
import PostList from "../postList/index";
import Header from '../header/index';

import { API } from "../../api";

function Home() {
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

            <Header />

            { !loading ? <PostList posts={posts} /> : <p>Carregando...</p>}
            {error && <p>{error}</p>}

            <Footer />

        </div >
    );
}

export default Home;
