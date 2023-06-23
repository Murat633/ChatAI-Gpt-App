import React from 'react'

import Logo from 'components/logo/'

// @ts-ignore
import styles from './Navbar.module.scss'
import NavItem from './modules/nav-item/'


const Navbar: React.FC = () => {
    return (
        <nav className={styles["navbar"]}>
            <Logo />
            <div className={styles["navbar__nav-links"]}>
                <NavItem text={"Hakkımızda"} path={"/"} />
                <NavItem text={"Rehberler"} path={"/guides"} />
                <NavItem text={"İletişim"} path={"/contact"} />
                <NavItem text={"Blog"} path={"/blogs"} />
            </div>
        </nav>
    )
}

export default Navbar
