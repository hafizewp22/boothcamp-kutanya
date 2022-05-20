import styles from "./Why.module.scss"
import FrameImages from '../../../images/icons/star.png'
import LoveImages from '../../../images/icons/love.png'
import ValidImages from '../../../images/icons/valid.png'
import PrintImages from '../../../images/icons/print.png'

const Why = () => {
    return <div className={styles.bodys}>
        <div>
            <div className={styles.Whys}>
                <h2>Kenapa harus memilih Bank Soal?</h2>
            </div>
            <div className={styles.MateriContainerPart1}>
                <div className={styles.Materi}>
                    <div>
                        <h1 className={styles.Score}>9.1/10</h1>
                        <p className={styles.TitleDetails}>Pengguna dapat <b>meningkatkan materi mana yang belum dikuasai</b></p>
                    </div>
                    <div>
                        <img src={FrameImages} style={{ width: '50px', height: '50px', padding: '9px' }} />
                    </div>
                </div>

                <div className={styles.Materi}>
                    <div>
                        <h1 className={styles.Score}>97%</h1>
                        <p className={styles.TitleDetails}>Menilai Bank Soal <b>lebih disukai daripada pengajaran di sekolah</b></p>
                    </div>
                    <div>
                        <img src={LoveImages} style={{ width: '50px', height: '50px', padding: '9px' }} />
                    </div>
                </div>

                <div className={styles.Materi}>
                    <div>
                        <h1 className={styles.Score}>97%</h1>
                        <p className={styles.TitleDetails}>Menilai Bank Soal <b>sangat membantu pemahaman belajar</b></p>
                    </div>
                    <div>
                        <img src={ValidImages} style={{ width: '50px', height: '50px', padding: '9px' }} />
                    </div>
                </div>
            </div>
            
            <div className={styles.MateriContainerPart2}>
                <div className={styles.Materi}>
                    <div>
                        <h1 className={styles.Score}>95%</h1>
                        <p className={styles.TitleDetails}>Menilai Bank Soal sangat <b>membantu untuk persiapan ujian</b></p>
                    </div>
                    <div>
                        <img src={PrintImages} style={{ width: '50px', height: '50px', padding: '9px' }} />
                    </div>
                </div>

                <div className={styles.Materi}>
                    <div>
                        <h1 className={styles.Score}>94%</h1>
                        <p className={styles.TitleDetails}>Pengguna <b>langsung naik nilainya</b> setelah berlangganan</p>
                    </div>
                    <div>
                        <img src={FrameImages} style={{ width: '50px', height: '50px', padding: '9px' }} />
                    </div>
                </div>
            </div>
        </div>
    </div>

}

export default Why
