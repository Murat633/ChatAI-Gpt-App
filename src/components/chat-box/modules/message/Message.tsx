import React from 'react'

//@ts-ignore
import styles from './Message.module.scss'
//@ts-ignore
import gptIcon from '../../../../Icons/gpt.png'

const Message = (props: MessageProperty) => {
    return (
        <>
            {
                props.type == "question" ? (
                    <div className={styles.question}>
                        <span>{props.message}</span>
                    </div>
                ) : (
                    <div className={styles.gpt}>
                        <img src={gptIcon} alt="" />
                        <span>{props.message}</span>
                    </div>
                )
            }
        </>
    )
}

export default Message
