import React from 'react'

// @ts-ignore
import styles from './ChatBox.module.scss'

//Components
import SendMessage from './modules/send-message/SendMessage'
import Chat from './modules/chat/Chat'

const ChatBox = () => {
    return (
        <div className={styles.chatbox}>
            <Chat />
            <SendMessage />
        </div>
    )
}

export default ChatBox
