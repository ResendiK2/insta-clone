import React, { useState, useEffect } from "react";

import './App.css';
import Footer from "./footer";
import PostList from "./postList";
import AuthView from "./auth";
import Header from './header';

import { API, setAuthToken } from "./api";

function App() {
    const initialState = localStorage.getItem("auth-token");
    const [isLogged, setIsLogged] = useState(initialState);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState();
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        if (isLogged) {
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
        }
    }, [isLogged]);

    if (!isLogged) {
        return (
            <AuthView
                loading={loading}
                error={error}
                handleLogin={(user) => {
                    if (user && user.password) {
                        setLoading(true);
                        API.post("/users/login", user)
                            .then((response) => {
                                setAuthToken(response.data.token);
                                setIsLogged(response.data);
                                setLoading(false);
                            })
                            .catch((apiError) => {
                                setLoading(false);
                                setError(apiError.response.data.error);
                            });
                    }
                }}
            />
        );
    }
    return (
        <div className="App">

            <Header />

            { !loading ? <PostList posts={posts} /> : <p>Carregando...</p>}

            <Footer userName={posts} />
        </div >
    );
}

export default App;
