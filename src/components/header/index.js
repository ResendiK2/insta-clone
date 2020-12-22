/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/alt-text */

import { useState } from "react";

import styles from './styles.module.css';

import { Link } from "react-router-dom";

import Avatar from './../avatar';

import { FaDoorOpen } from "@react-icons/all-files/fa/FaDoorOpen";
import { FaTimesCircle } from "@react-icons/all-files/fa/FaTimesCircle";
import { FaSearch } from "@react-icons/all-files/fa/FaSearch";
import { FaRegHeart } from "@react-icons/all-files/fa/FaRegHeart";
import { FaHome } from "@react-icons/all-files/fa/FaHome";
import { FaRegPaperPlane } from "@react-icons/all-files/fa/FaRegPaperPlane";
import { FaRegCompass } from "@react-icons/all-files/fa/FaRegCompass";
import { FaRegPlusSquare } from "@react-icons/all-files/fa/FaRegPlusSquare";

import logo from "../../public/logo.png";

function Header() {

    const [search, setSearch] = useState();

    function logout() {
        localStorage.clear();
        window.location.reload();
    }

    return (
        <header className={styles.header}>
            <div className={styles.container}>

                <div className={styles.logoContainer}>
                    <img
                        src={logo}
                        className={styles.logo}
                    />
                </div>

                <div className={styles.search}>
                    <FaSearch size="15" />
                    <input
                        className={styles.input}
                        disabled={true}
                        type={'text'}
                        placeholder={"Pesquisar"}
                        value={search}
                        onChange={(event) => setSearch(event.target.value)}
                    />
                    <button
                        className={styles.searchButton}
                        onClick={() => setSearch('')}
                    >
                        <FaTimesCircle size="15" color="rgb(190, 190, 190)" />
                    </button>
                </div>

                <div className={styles.icons}>
                    <Link
                        to="/"
                        className={styles.postButton}
                    >

                        <FaHome size={23} color="black" />

                    </Link>

                    <Link
                        to="/post"
                        className={styles.postButton}
                    >

                        <FaRegPlusSquare size={23} color="black" />

                    </Link>
                    {/* Icones estaticos, meramente decorativos */}
                    <div className={styles.decoration}>
                        <FaRegPaperPlane size={23} color="rgb(190, 190, 190)" />
                    </div>

                    <div className={styles.decoration}>
                        <FaRegCompass size={23} color="rgb(190, 190, 190)" />
                    </div>

                    <div className={styles.decoration}>
                        <FaRegHeart size={23} color="rgb(190, 190, 190)" />
                    </div>

                    {/*                     <div className={styles.background}>
                        <img src="https://media-exp1.licdn.com/dms/image/C4E03AQHl4Nw0ESXmAA/profile-displayphoto-shrink_800_800/0?e=1612396800&v=beta&t=oCRHXfEjNLrIDz2BZBvDEREmcv3gjjPAdar02VgdprA" className={styles.image} />
                    </div> */}

                </div>

                <div className={styles.buttonLogout}>
                    <button
                        className={styles.logout}
                        onClick={() => logout()}
                    >
                        <FaDoorOpen size={18} />
                    </button>
                </div>
            </div>
        </header>
    );
}

export default Header;