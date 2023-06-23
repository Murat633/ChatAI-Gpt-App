import React from 'react'

//@ts-ignore
import styles from './SidebarSection.module.scss'

import { Link } from 'react-router-dom'

const SidebarSection = (props: SidebarSectionProperty) => {
    return (
        <section className={styles.section}>
            <h3 className={styles.title}>{props.title}</h3>
            <div className={styles["links"]}>
                {props.data.map((link, i) => (
                    <Link className={styles.link} key={i} to={link.path}>
                        <span><img className={styles.icon} src={link.icon} /></span>
                        <span>{link.text}</span>
                    </Link>
                ))}
            </div>
        </section>
    )
}

export default SidebarSection
