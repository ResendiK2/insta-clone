/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/alt-text */

import styles from './styles.module.css';

import { Link } from "react-router-dom";

import { FaTimes } from "@react-icons/all-files/fa/FaTimes";
import { FaTimesCircle } from "@react-icons/all-files/fa/FaTimesCircle";
import { FaSearch } from "@react-icons/all-files/fa/FaSearch";
import { FaRegHeart } from "@react-icons/all-files/fa/FaRegHeart";
import { FaHome } from "@react-icons/all-files/fa/FaHome";
import { FaRegPaperPlane } from "@react-icons/all-files/fa/FaRegPaperPlane";
import { FaRegCompass } from "@react-icons/all-files/fa/FaRegCompass";
import { FaRegPlusSquare } from "@react-icons/all-files/fa/FaRegPlusSquare";

function Header() {
    function logout() {
        localStorage.clear();
        window.location.reload();
    }
    return (
        <header className={styles.header}>
            <div className={styles.container}>

                <div className={styles.logoContainer}>
                    <img
                        src={"https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1200px-Instagram_logo.svg.png"}
                        className={styles.logo}
                    />
                </div>

                <div className={styles.search}>
                    <FaSearch size="15" />
                    <input className={styles.input} type={'text'} placeholder={"Pesquisar"} />
                    <button className={styles.searchButton}>
                        <FaTimesCircle size="15" color="rgb(78, 77, 77)" />
                    </button>
                </div>

                <div className={styles.icons}>
                    <FaHome size={23} />

                    <FaRegPaperPlane size={23} />

                    <Link
                        to="/post"
                        className={styles.postButton}
                    >
                        <FaRegPlusSquare size={23} color="black" />
                    </Link>

                    <FaRegCompass size={23} />

                    <FaRegHeart size={23} />

                    <div className={styles.background}>
                        <img src="https://media-exp1.licdn.com/dms/image/C4E03AQHl4Nw0ESXmAA/profile-displayphoto-shrink_800_800/0?e=1612396800&v=beta&t=oCRHXfEjNLrIDz2BZBvDEREmcv3gjjPAdar02VgdprA" className={styles.image} />
                    </div>
                </div>

                <div className={styles.buttonLogout}>
                    <button
                        className={styles.logout}
                        onClick={() => logout()}
                    >
                        <FaTimes />
                    </button>
                </div>
            </div>
        </header>
    );
}

export default Header;