import React from 'react';
import { useState } from 'react';

import { API } from "../../api";

import styles from './styles.module.css';

import { FaRegHeart } from "@react-icons/all-files/fa/FaRegHeart";
import { FaHeart } from "@react-icons/all-files/fa/FaHeart";

class LikeButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            likes: props.likes,
            loading: false,
            error: null,
            like: false,
        };
    }

    async addLike() {
        const countNow = this.state.likes;
        try {
            this.setState({
                loading: true,
                likes: countNow + 1,
                like: true
            });

            await API.patch(`/posts/${this.props.id}/like`);

            this.setState({ loading: false });
        } catch (error) {
            this.setState({
                loading: false,
                error,
                likes: countNow,
                like: false,
            });
        }
    }

    render() {

        return (
            <main className={styles.component}>
                <button
                    className={styles.buttonLike}
                    onClick={() => this.addLike()}
                    disabled={this.state.like}
                >
                    {this.state.like === false ?
                        (
                            <FaRegHeart size={25} />
                        )
                        :
                        (
                            <FaHeart size={25} color="rgb(243, 44, 44)" />
                        )
                    }
                </button>

                <div>
                    {this.state.likes === 1 ?
                        (
                            <p>
                                {this.state.likes} like
                            </p>
                        )
                        :
                        (
                            <p>
                                {this.state.likes} likes
                            </p>
                        )
                    }
                </div>
            </main>
        )
    }
}

export default LikeButton;