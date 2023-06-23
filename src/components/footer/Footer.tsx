import React from 'react'

//@ts-ignore
import styles from './Footer.module.scss'

const Footer = () => {
    return (
        <>
            <div className={styles['rgb-hr']}></div>
            <footer className={styles.footer}>
                <span className={styles.text}>Tüm Hakları Saklıdır.</span>
                <span className={styles.text}>Copyright &copy; 2023 All right reserved.</span>
            </footer>
        </>
    )
}

export default Footer
