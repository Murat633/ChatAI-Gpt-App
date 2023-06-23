import React from 'react'

//@ts-ignore
import styles from './Contact.module.scss'

import ContactBox from 'components/contact-form/ContactBox'
import Section from 'components/section/Section'
import Sidebar from 'components/sidebar/Sidebar'
import { sidebarprop } from 'datas/datas'



const Contact = () => {

   
    return (
        <div className={styles.contact}>
            <section className="menu">
                <Sidebar data={sidebarprop} />
            </section>

            <div className={styles["contact-section"]}>
                <h1 className={styles.title}>İletişim</h1>
                <Section
                    title='Yapay Zekayı Kullanma Sanatı'
                    description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni illum voluptate ab laborum alias similique, sunt nihil consectetur debitis, qui molestiae voluptatem architecto rem possimus obcaecati voluptatibus, harum beatae cum?'
                    btnText='Daha Fazla >'
                    promotionItem={<ContactBox />}
                />
            </div>
        </div>
    )
}

export default Contact
