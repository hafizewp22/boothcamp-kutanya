import React from 'react';
import styles from './Home.module.scss'
import FrameImages from '../../images/frame.png'

import Header from './components/Header';
import Title from './title/Title';
import Why from './why/Why';
import Footer from './footer/Footer';
import Feature from './feature/Feature';
import {useNavigate} from 'react-router-dom'

function Home() {

    let navigate = useNavigate();

    return (
        <div className={styles.container}>
            <div className={styles.bacbrod1}>
                <img src={FrameImages} />
            </div>
            <Header/>
            <Title
                onclick={()=> navigate('/quis')}
            />
            <Why />
            <Feature />
            <Footer />
        </div>
    );
}

export default Home;