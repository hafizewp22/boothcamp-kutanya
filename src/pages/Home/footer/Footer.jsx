import styles from "./Footer.module.scss";
import ImageFoooter from '../../../images/subtract.png'

const Footer = () => {
    return <div className={styles.container}>
        <div className={styles.content}>
            <p className={styles.title}>Copyright © 2021 BankSoalKutanya</p>
            <div className={styles.police}>
                <p>Privacy Policy</p>
                <ul>Term of Use</ul>
            </div>
        </div>
        <div className={styles.imageFooter}>
            <img src={ImageFoooter} alt="" />
        </div>
    </div>

}

export default Footer
