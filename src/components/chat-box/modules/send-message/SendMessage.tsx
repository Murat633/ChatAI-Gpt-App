import React from 'react'

//@ts-ignore
import styles from './SendMessage.module.scss'
//@ts-ignore
import sendPng from '../../../../Icons/send-btn.png'

const SendMessage = () => {
    return (
        <div className={styles["send-box"]}>
            <input className={styles["send-box__input"]} type="text" placeholder='Metninizi buraya giriniz...' />
            <button className={styles["send-box__btn"]}>
                <img width="20px" src={sendPng} alt="" />
            </button>
        </div>
    )
}

export default SendMessage
