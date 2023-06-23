import React,{useEffect,useState} from 'react'

//@ts-ignore
import styles from './ShareDetails.module.scss'

import ContactBox from 'components/contact-form/ContactBox'
import Section from 'components/section/Section'
import Sidebar from 'components/sidebar/Sidebar'


import { blogs, guides, sidebarprop } from 'datas/datas'
import { useParams } from 'react-router-dom'

const ShareDetails = () => {

    const {id} = useParams()
    
    const [data,setData] = useState<SharesData>()

    useEffect(()=>{
        blogs.forEach(blog => {
            if(blog.id == Number(id)) {
                setData(blog)
            }
        })

        guides.forEach(guide => {
            if(guide.id == Number(id)) {
                setData(guide)
            }
        })
    },[])

    return (
        <div className={styles["share-details"]}>
            <section className="menu">
                <Sidebar data={sidebarprop} />
            </section>

            <div className={styles["share-details__section"]}>
                <h1 className={styles.title}>{data?.title}</h1>
                
                <div className={styles["share-details__section__description"]}>
                    {data?.image && <img className={styles["share-details__section__description__img"]} src={data?.image} alt="" />}

                    <p className={styles.description}>
                       {data?.description }      
                    </p>
                </div>
            </div>
        </div>
    )
}

export default ShareDetails
