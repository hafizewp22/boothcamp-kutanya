import React, { useEffect, useState } from 'react';
import { LoopAlphabet } from '../../../utils/baseFuntions/loopAlfabet';
import Card from '../components/Card';
import styles from './Result.module.scss';
import { IoCloseCircle, IoCheckmarkCircle } from "react-icons/io5";
import { RenderIf } from '../../../components';
import { useRecoilValue } from 'recoil';
import { answerData } from '../../../utils/recoil';
import { NilaiPoint } from '../../../utils/baseFuntions/funtions';


function Result() {

    const answer = useRecoilValue(answerData)

    const [answerTrue, setAnswerTrue] = useState(0)
    const [score, setScore] = useState(0)
    const [allDataAnswer, setAllDataAnser] = useState([])

    const handleTrueAnswer = () => {
        if (answer) {
            let AllData = []
            answer.forEach(element => {
                const dataNew = element.option.find(e => e.checkOn === true)
                if (dataNew) {
                    AllData.push(dataNew.point)
                } else {
                    AllData.push(0)
                }
            });
            const total = AllData.reduce((a, b) => a + b)
            setAnswerTrue(total / 100)
            setScore(total / 10)
            setAllDataAnser(AllData)
        }
    }

    useEffect(() => {
        handleTrueAnswer()
    },[])

    return (
        <div className={styles.container} >
            <Card className={styles.cardUserInfo}>
                <div className={styles.left}>
                    <p className={styles.name}>Rahma Adinda</p>
                    <div className={styles.countAnswer}>
                        <p>Jawaban benar :</p>
                        <span>{answerTrue}/10</span>
                    </div>
                </div>
                <div
                    className={styles.right}>
                    <div className={styles.boxPoint}>
                        <p>Nilai</p>
                        <p className={styles.scores}>{score}</p>
                    </div>
                    <p className={styles.Nilai}>{NilaiPoint(score)}</p>
                </div>
            </Card>
            {
                answer.map((item, index) => {
                    return (
                        <Card key={index} className={styles.cardAnswer}>
                            <div className={styles.label}>
                                Pertanyaan no {item?.numOfSort}
                                <RenderIf isTrue={allDataAnswer[index] === 100}>
                                    <IoCheckmarkCircle
                                        className={styles.labelTrue}
                                    />
                                </RenderIf>
                                <RenderIf isTrue={allDataAnswer[index] === 0}>
                                    <IoCloseCircle
                                        className={styles.labelWrong}
                                    />
                                </RenderIf>
                            </div>
                            <p className={styles.question}>{item?.label} </p>
                            <p className={styles.labelChoose}>Pilihan Jawaban</p>

                            {
                                item?.option.map((choose,index) => {
                                    return (
                                        <div key={index}
                                            className={`${styles.content} ${choose.point === 100 && styles.trueAnswer} ${choose.point === 0 && choose.checkOn ? styles.wrong : ''} `}>
                                            <p className={styles.numbering}>{LoopAlphabet('A', index)}.</p>
                                            <p className={styles.answer}>{choose?.label} </p>
                                        </div>
                                    )
                                })
                            }
                        </Card>
                    )
                })
            }
        </div>
    );
}

export default Result;