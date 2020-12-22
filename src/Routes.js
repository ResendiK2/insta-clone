/* eslint-disable no-const-assign */

import { useState } from "react";
import { Switch, BrowserRouter, Route } from "react-router-dom";
import AuthView from "./components/auth/index";
import Home from "./components/home/index";
import PostForm from "./components/postForm/index";

import { API, setAuthToken, setUserName } from "./api";

const PrivateRoutes = (props) => {
    return (
        <Switch>
            <Route path="/" exact>
                <Home />
            </Route>
            <Route path="/post">
                <PostForm />
            </Route>
        </Switch>
    );
}

const PublicRoutes = (props) => {

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState();

    return (
        <Switch>
            <Route path="/">
                <AuthView
                    loading={loading}
                    error={error}
                    handleLogin={(user) => {
                        if (user && user.password) {
                            setLoading(true);
                            setUserName(user.name)
                            API.post("/users/login", user)
                                .then((response) => {
                                    setAuthToken(response.data.token);
                                    props.setIsLogged(response.data);
                                    setLoading(false);
                                })
                                .catch((apiError) => {
                                    setLoading(false);
                                    setError(apiError.response.data.error);
                                });
                        }
                    }}
                />
            </Route>
        </Switch>
    );
}

const Routes = (props) => {

    const initialState = localStorage.getItem("auth-token");
    const [isLogged, setIsLogged] = useState(initialState);

    return (
        <BrowserRouter>
            {isLogged ?
                (<PrivateRoutes />)
                :
                (<PublicRoutes setIsLogged={setIsLogged} />)
            }
        </BrowserRouter>
    );
}

export default Routes;