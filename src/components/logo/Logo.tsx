import React, { ReactElement } from 'react'
import { Link } from 'react-router-dom'

//@ts-ignore
import styles from './Logo.module.scss'

const Logo: React.FC = () => {
    return (
        <Link to={"/"} className={styles["logo-box"]}>
            <h1 className={styles["logo-box__logo"]}>
                <span className={styles["logo-box__logo__text"]}>Chat</span>
                <span className={styles["logo-box__logo__extension"]}>AI</span>
            </h1>
        </Link>
    )
}

export default Logo
