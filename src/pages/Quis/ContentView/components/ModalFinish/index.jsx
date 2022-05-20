import React from 'react';
import { Buttons, ModalContainer } from '../../../../../components';
import useModal from '../../../../../utils/baseFuntions/useModal';
import styles from './ModalFinish.module.scss';
import { IoCloseCircleOutline } from "react-icons/io5";

function ModalFinish({
    onClick
}) {

    const {modal, setModal} = useModal('modal-finish')


    const handleClick = () => {
        setModal(false)
        const x = setTimeout(() => {
            onClick()
        }, 500)
    }

    return (
        <ModalContainer
            show={modal}
        >
            <div className={styles.container}>
                <div
                    onClick={()=> setModal(false)}
                    className={styles.btnExit}>
                    <IoCloseCircleOutline />
                </div>
                <div className={styles.content}>
                    <div className={styles.boxTitle}>
                        <p className={styles.title}>Apakah Anda yakin ?</p>
                        <p className={styles.subtitle}>Anda tidak dapat membatalkan penilaian jika melanjutkan pilihan ini!</p>
                    </div>
                    <div className={styles.boxBtn}>
                        <Buttons
                            onClick={()=> setModal(false)}
                            background={'#FCBF62'}
                            color='#96661C'
                            className={styles.btn}
                        >Tidak</Buttons>
                        <Buttons
                            onClick={()=> onClick && handleClick()}
                            background={'#36B37E'}
                            color='white'
                            className={styles.btn}
                        >Ya</Buttons>
                    </div>
                </div>
            </div>
        </ModalContainer>
    );
}

export default ModalFinish;