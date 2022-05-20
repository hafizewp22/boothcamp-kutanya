import React, { useEffect, useRef, useState } from 'react';
import styles from './TimeReady.module.scss';

function TimeReady({
    handleFinish,
    duration = 600
}) {

    // We need ref in this, because we are dealing
    // with JS setInterval to keep track of it and
    // stop it when needed
    const Ref = useRef(null);
  
    // The state for our timer
    const [timer, setTimer] = useState('00:00');
  
  
    const getTimeRemaining = (e) => {
        const total = Date.parse(e) - Date.parse(new Date());
        const seconds = Math.floor((total / 1000) % 60);
        const minutes = Math.floor((total / 1000 / 60) % 60);
        // const hours = Math.floor((total / 1000 * 60 * 60) % 24);
        return {
            total, minutes, seconds
        };
    }
  
  
    const startTimer = (e) => {
        let { total, minutes, seconds }  = getTimeRemaining(e);
        if (total >= 0) {
            setTimer(
                // (hours > 9 ? hours : '0' + hours) + ':' +
                (minutes > 9 ? minutes : '0' + minutes) + ':'
                + (seconds > 9 ? seconds : '0' + seconds)
            )
        } else {
            // action
            handleFinish()
        }
    }
  
  
    const clearTimer = (e) => {
        setTimer('10:00');
  
        if (Ref.current) clearInterval(Ref.current);
        const id = setInterval(() => {
            startTimer(e);
        }, 1000)
        Ref.current = id;
    }
  
    const getDeadTime = () => {
        let deadline = new Date();
  
        deadline.setSeconds(deadline.getSeconds() + duration);
        return deadline;
    }
  
    useEffect(() => {
        clearTimer(getDeadTime());
    }, []);
  

    return (
        <div className={styles.container}>
            <h2>Waktu pengerjaan</h2>

            <div className={styles.time}>
                <div>{timer}</div>
            </div>
        </div>
    );
}

export default TimeReady;