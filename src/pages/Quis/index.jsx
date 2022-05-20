import React, { useEffect, useState } from 'react';
import { Buttons, HeaderQuis, RenderIf } from '../../components';
import styles from './Quis.module.scss';
import reward from '../../images/quis/reward.png';
import ContentView from './ContentView';
import { getAllQuestion } from '../../utils/api/question';
import { useRecoilState } from 'recoil';
import { dataQuestion } from '../../utils/recoil';
import Result from './Result';
import Spinner from '../../components/Spiner';
import {useNavigate} from 'react-router-dom'

function Quis() {

    const navigate = useNavigate()

    const [ready, setReady] = useState('stay')
    const [title, setTitle] = useState(null)
    const [data, setData] = useRecoilState(dataQuestion)

    const handleReady = () => {
        setReady('ready')
        setTitle('Soal UTBK 2020 - Biologi')
    }

    const handleFinish = () => {
        setReady('result')
        setTitle('HASIL JAWABAN')
    }

    const handleBtnBack = () => {
        if (ready === 'stay') {
            navigate(-1)
        } else if (ready === 'ready') {
            setTitle(null)
            setReady('stay')
        } else {
            navigate('/')
        }
    }

    const getData = () => {
        getAllQuestion()
            .then(result => {
                setData(result)
            }).catch(error => {
                console.log(error)
            })
    }

    useEffect(() => {
      getData()
    }, [])
    

    return (
        <div className={styles.container}>
            <HeaderQuis
                title={title}
                onBack={() => handleBtnBack()}
            />
            <RenderIf isTrue={ready === 'stay'}>
                <div className={styles.head}>
                    <div className={styles.content}>
                        <div className={styles.left}>
                            <h3>Ayo Mulai Bank Soal Minggu ini!</h3>
                            <p>Peringkatmu akan diperbarui setiap minggunya, Yuk langsung kerjain soalnya untuk melihat sejauh apa progres kamu!</p>
                        </div>
                        <div className={styles.right}>
                            <img src={reward} alt="" />
                            <button>Lihat Leaderboard</button>
                        </div>
                    </div>
                </div>
                <section>
                    <div className={styles.top}>
                        <h1>{data?.title || ''}</h1>
                        <p>{data?.description || ''}</p>
                    </div>
                    <RenderIf isTrue={!data}>
                        <div className={styles.spiner}>
                            <Spinner color='#FCBF62' size={100}/>
                        </div>
                    </RenderIf>
                    <RenderIf isTrue={data}>
                        <div className={styles.bottom}>
                            <p><span>{data?.questions ? data?.questions.length : '0'} </span> Soal | Waktu <span>10 menit</span> | Tingkat Kesulitan : <span>{data?.layoutSize || 'medium'} </span></p>
                            <Buttons
                                disabled={data ? false : true}
                                onClick={()=> handleReady()}
                                background={'linear-gradient(180deg, #AA80F9 0%, #756CE0 100%)'}
                                color={'white'}
                            >Mulai mengerjakan</Buttons>
                        </div>
                    </RenderIf>
                </section>
            </RenderIf>
            <RenderIf isTrue={ready === 'ready'}>
                <ContentView
                    onClick={()=>handleFinish()}
                />
            </RenderIf>
            <RenderIf isTrue={ready === 'result'}>
                <Result />
            </RenderIf>
        </div>
    );
}

export default Quis;