import styles from "./Feature.module.scss"

import I1Images from '../../../images/icons/i1.png'
import I2Images from '../../../images/icons/i2.png'
import I3Images from '../../../images/icons/i3.png'
import I4Images from '../../../images/icons/i4.png'

import SubtractImages from '../../../images/subtract.png'

const Feature = () => {
    return <div className={styles.bodys}>
            <div>
                <div className={styles.Titles}>
                    <h2>Fitur Kami</h2>
                </div>
                <div className={styles.Component_container}>
                    <div>
                        <div className={styles.Upper}>
                            <div className={styles.UpperLe}>
                                <img src={I1Images} className={styles.ImgIcon} />
                            </div>
                            <div class={styles.Texts_Left}>
                                <h1 className={styles.H1s}>Ribuan soal lengkap untuk mengasah kemampuan!</h1>
                                <div class={styles.TextsDetail}>
                                    Bank Soal Kutanya memilikin soal yang lengkap dari mata pelajaran manapun dengan soal HOTS
                                </div>
                            </div>
                        </div>

                        <div className={styles.Upper}>
                            <div class={styles.Texts_Right}>
                                <h1 className={styles.H1s}>Peringkat Leaderboard Secara Nasional</h1>
                                <div class={styles.TextsDetail}>
                                    Peringkat akan dibuat secara nasional yang bisa bikin kamu makin semangat untuk jadi yang terbaik.
                                </div>
                            </div>
                            <div className={styles.UpperLe}>
                                <img src={I2Images} className={styles.ImgIcon} />
                            </div>
                        </div>

                        <div className={styles.Upper}>
                            <div className={styles.UpperLe}>
                                <img src={I3Images} className={styles.ImgIcon} />
                            </div>
                            <div class={styles.Texts_Left}>
                                <h1 className={styles.H1s}>Grafik Progres</h1>
                                <div class={styles.TextsDetail}>
                                    Pantau perkembanganmu lewat grafik progres dan ketahui materi yang perlu kamu tingkatkan.
                                </div>
                            </div>
                        </div>

                        <div className={styles.Upper}>
                            <div class={styles.Texts_Right}>
                                <h1 className={styles.H1s}>Download Soal</h1>
                                <div class={styles.TextsDetail}>
                                    Mau kerjain sambil coret-coret? Bank Soal Kutanya bisa kamu download dan cetak, lho!
                                </div>
                            </div>
                            <div className={styles.UpperLe}>
                                <img src={I4Images} className={styles.ImgIcon} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className={styles.bacbrod2}>
                <img src={SubtractImages} />
            </div> */}
        </div>

}

export default Feature