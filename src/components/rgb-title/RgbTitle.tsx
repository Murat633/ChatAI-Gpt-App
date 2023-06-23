import React from 'react'

//@ts-ignore
import styles from './RgbTitle.module.scss'

const RgbTitle = (props: RgbTitleProperty) => {
    return (
        <h2 style={{ background: `linear-gradient(${props.colors && props.colors?.length > 1 ? props.colors?.join(",") : "#333,#fff"})`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }} className={styles.title}>{props.text}</h2>
    )
}

export default RgbTitle
