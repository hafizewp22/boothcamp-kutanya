import React, { useEffect, useState } from 'react';
import styles from './NoSerial.module.scss';


function NoSerial({
    onClick,
    setCurrentIndex,
    currentIndex,
    dataQuest = null
}) {

    const [total, setTotal] = useState(0)


    useEffect(() => {
        const hasil = dataQuest.filter(e => e.check === true)
        setTotal(hasil.length)
    }, [dataQuest])
    
    return (
        <div className={styles.container}>
            <h2>Nomor Soal</h2>
            <div className={styles.list}>
                {
                    dataQuest &&
                    dataQuest.map((item, index) => (<button
                        style={currentIndex === index ? {
                            background: '#FCBF62',
                            color: 'white',
                        } : {
                                background: item.check ? 'rgba(252, 191, 98,0.4)' : '',
                        }}
                        onClick={() => setCurrentIndex && setCurrentIndex(index)} key={index}>{index+1}</button>))
                }
            </div>
            <div className={styles.boxButton}>
                <button
                    onClick={()=> onClick && onClick()}
                    className={total === 10 ? styles.active : ''}>Selesaikan Pengerjaan</button>
            </div>
        </div>
    );
}

export default NoSerial;