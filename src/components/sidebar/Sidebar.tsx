import React from 'react'

//@ts-ignore
import styles from './Sidebar.module.scss'
import SidebarSection from './modules/sidebar-section/SidebarSection'
import SidebarSubscription from './modules/sidebar-subscription/SidebarSubscription'

const Sidebar = (props: SidebarProperty) => {
    return (
        <aside className={styles.sidebar}>
            {props.data.map((item, i) => (
                <>
                    <SidebarSection data={item.data} title={item.title} key={i} />
                    <br />
                    <hr />
                    <br />
                </>
            ))}
            <SidebarSubscription />
        </aside>
    )
}

export default Sidebar
