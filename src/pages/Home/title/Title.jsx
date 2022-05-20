import styles from "./Title.module.scss"

const Title = ({
    onclick
}) => {
    return (
        <div className={styles.bodys}>
            <div className={styles.TitleText}>
                <p>Ganti Cara Belajar Mulai Dari Bank Soal</p>
            </div>
            <div className={styles.TitleTextDetails}>
                Platform kumpulan soal dan materi evaluasi siswa yang dikelompokkan berdasarkan topik ajar. Tersedia juga berbagai akses soal latihan, ulangan dan ujian.
            </div>
            <button
                onClick={() => onclick && onclick()}
            >Kerjai Bank Soal Sekarang</button>
        </div>
    )
}

export default Title
