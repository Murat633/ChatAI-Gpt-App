import React from 'react'
import { Link } from 'react-router-dom'

// @ts-ignore
import styles from './NavItem.module.scss'


const NavItem: any = (props: NavItemProperty) => {
    return (
        <>
            <Link className={styles["nav-link"]} to={props.path || "/"}>{props.text || "link'e isim vermek için 'text' özelliğini kullan"}</Link>
        </>
    )
}

export default NavItem
