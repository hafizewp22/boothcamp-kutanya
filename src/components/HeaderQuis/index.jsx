import React from 'react';
import styles from './HeaderQuis.module.scss';
import {ReactComponent as ArrowBack} from '../../images/icon/arrow-back.svg';

function HeaderQuis({
    title = null,
    onBack,
    headerBtn,
}) {
    return (
        <div className={styles.container}>
            {
                !headerBtn &&
                <button
                    onClick={()=> onBack && onBack()}
                >
                    <ArrowBack />
                </button>
            }
            {
                title &&
                <div className={styles.titile}>
                    {title}
                </div>
            }
        </div>
    );
}

export default HeaderQuis;