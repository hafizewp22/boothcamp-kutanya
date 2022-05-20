import React, { useEffect, useState } from 'react';
import { NoSerial, Question, TimeReady } from '../components';
import styles from './Content.module.scss';
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import Buttons from '../../../components/Buttons';
import { ReactComponent as IconDownload } from '../../../images/icon/icon-download.svg';
import { useRecoilState, useRecoilValue } from 'recoil';
import { answerData, dataQuestion } from '../../../utils/recoil';
import useModal from '../../../utils/baseFuntions/useModal';
import ModalFinish from './components/ModalFinish';

function ContentView({
    onClick,
}) {
    const data = useRecoilValue(dataQuestion)
    const [dataQuest, setDataQuestion] = useState([])
    const [answer, setDataAnswer] = useRecoilState(answerData)

    const modaFinish = useModal('modal-finish')

    // console.log(data)

    const [currentIndex, setCurrentIndex] = useState(0)
    const [question, setQuestion] = useState(dataQuest[currentIndex])

    useEffect(() => {
        if (data) {
            const newData = data?.questions.map(item=> ({...item, check: false, option: item?.option.map(e=> ({...e, checkOn: false}))}))
            setDataQuestion(newData)
        }
    }, [])
    
    useEffect(() => {
        setQuestion(dataQuest[currentIndex])
    }, [currentIndex, dataQuest])
    
    const handleNav = (status) => {
        if (status === 'next') {
            if (currentIndex < 9) {
                setCurrentIndex(i=> i+ 1)
            } else {
                setCurrentIndex(0)
            }
        } else {
            if (currentIndex > 0) {
                setCurrentIndex(i=> i - 1)
            } else {
                setCurrentIndex(9)
            }
        }
    }

    const handleFinish = () => {
        setDataAnswer(dataQuest)
        onClick()
    }

    return (
        <div className={styles.container}>
            <div className={styles.left}>
                <NoSerial
                    // onClick={() => handleFinish() }
                    onClick={() => modaFinish.setModal(true) }
                    setCurrentIndex={setCurrentIndex}
                    currentIndex={currentIndex}
                    dataQuest={dataQuest}
                />
                <TimeReady
                    handleFinish={handleFinish}
                />
                <Buttons
                    icon={<IconDownload />}
                    background={'linear-gradient(180deg, #AA80F9 0%, #756CE0 100%)'}
                    color='white'
                >DOWNLOAD SOAL</Buttons>
            </div>
            <div className={styles.right}>
                <Question
                    question={question}
                    dataQuest={dataQuest}
                    currentIndex={currentIndex}
                    setDataQuestion={setDataQuestion}
                />
                <div className={styles.footer}>
                    <div
                        onClick={()=> handleNav('previous')}
                        className={styles.nav}>
                        <BsChevronCompactLeft />
                    </div>
                    <div className={styles.count}>
                        {currentIndex + 1}/10
                    </div>
                    <div
                        onClick={()=> handleNav('next')}
                        className={styles.nav}>
                        <BsChevronCompactRight />
                    </div>
                </div>
            </div>
            <ModalFinish
                onClick={()=> handleFinish()}
            />
        </div>
    );
}

export default ContentView;