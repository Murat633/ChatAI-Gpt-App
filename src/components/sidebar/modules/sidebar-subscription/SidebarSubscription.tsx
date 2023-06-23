import React from 'react'

//@ts-ignore
import styles from './SidebarSubscription.module.scss'

const SidebarSubscription = () => {
    return (
        <section className={styles.subscription}>
            <h3 className={styles.title}>Abone Ol</h3>
            <div className={styles["form-group"]}>
                <label htmlFor="email">Mail Adresiniz:</label>
                <input placeholder='mail adresinizi girin.' type="text" name='email' id='email' className={styles.email} />
            </div>
            <button className={styles.button}>Abone Ol</button>
        </section>
    )
}

export default SidebarSubscription
