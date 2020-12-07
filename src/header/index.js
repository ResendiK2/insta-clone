/* eslint-disable jsx-a11y/alt-text */

import styles from './styles.module.css';

function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <div className={styles.search}>
                    <input className={styles.input} type={'text'} placeholder={"Pesquisar"} />
                </div>
                <div className={styles.background}>
                    <img src="https://media-exp1.licdn.com/dms/image/C4E03AQHl4Nw0ESXmAA/profile-displayphoto-shrink_800_800/0?e=1612396800&v=beta&t=oCRHXfEjNLrIDz2BZBvDEREmcv3gjjPAdar02VgdprA" className={styles.image} />
                </div>
            </div>
        </header>
    );
}

export default Header;