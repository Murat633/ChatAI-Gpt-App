import React from 'react'

//@ts-ignore
import styles from './ContactBox.module.scss'


const ContactBox = () => {
    return (
        <div className={styles.contact}>
            <h1 className={styles.title}>Bize Ulaşın</h1>
            <form className={styles.form}>
                <div className={styles["form-group"]}>
                    <input type="text" placeholder='Adınız:' />
                </div>

                <div className={styles["form-group"]}>
                    <input type="text" placeholder='Soyadınız:' />
                </div>

                <div className={styles["form-group"]}>
                    <input type="text" placeholder='Telefon:' />
                </div>

                <div className={styles["form-group"]}>
                    <input type="text" placeholder='E-Posta adresiniz:' />
                </div>

                <button className={styles.send}>Gönder</button>
            </form>
        </div>
    )
}

export default ContactBox
