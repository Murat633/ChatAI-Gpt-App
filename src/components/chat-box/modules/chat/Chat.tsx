import React from 'react'

// @ts-ignore
import styles from './Chat.module.scss'

import Message from '../message/Message'

const Chat = () => {
    return (
        <div className={styles.chat}>
            <Message message='Merhaba, bana bir soru sor.' />
            <Message type='question' message='Merhaba' />
        </div>
    )
}

export default Chat
