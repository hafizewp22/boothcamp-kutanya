import styles from "./Header.module.scss"


import logoImages from '../../../images/logo.png'

const Header = () => {
    return (
        <div className={styles.container}>
            <div className={styles.logo}>
                <img src={logoImages} className={styles.logoImg} alt='' />
            </div>
            <div className={styles.navigation}>
                <div className={styles.topnav_centered}>
                    <a href="#tentang" className={styles.active}>Tentang Kami</a>
                </div>
                <div className={styles.topnav_centered}>
                    <a href="#fitur" className={styles.active}>Fitur Kami</a>
                </div>
                <div className={styles.topnav_centered}>
                    <a href="#bank" className={styles.active}>Bank Soal</a>
                </div>
            </div>
        </div>
    )

}

export default Header