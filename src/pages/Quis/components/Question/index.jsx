import React from 'react';
import { RenderIf } from '../../../../components';
import { LoopAlphabet } from '../../../../utils/baseFuntions/loopAlfabet';
import styles from './Question.module.scss';

function Question({
    question,
    dataQuest,
    currentIndex,
    setDataQuestion
}) {

    const handleClick = (i) => {
        let allData = [...dataQuest]
        allData[currentIndex].check = true
        const DataNew  = allData[currentIndex].option.map(e=> ({...e, checkOn: false}))
        allData[currentIndex].option = DataNew
        allData[currentIndex].option[i].checkOn = true
        setDataQuestion(allData)
    }

    return (
        <RenderIf isTrue={question}>
            <div className={styles.container}>
                <h2>Pertanyaan no {question?.numOfSort} </h2>
                <p className={styles.question}>{question?.label}</p>
                <p className={styles.subTitle}>Pilihan Jawaban</p>

                {
                    question?.option.map((item,index) => {
                        return (
                            <div
                                onClick={()=> handleClick(index)}
                                key={index} className={`${styles.content} ${item.checkOn ? styles.active : ''}`}>
                                <p className={styles.numbering}>{LoopAlphabet('A', index)}.</p>
                                <p className={styles.answer}>{item?.label} </p>
                            </div>
                        )
                    })
                }
            </div>
        </RenderIf>
    );
}

export default Question;