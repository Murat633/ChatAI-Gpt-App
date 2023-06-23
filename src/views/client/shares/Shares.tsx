import React, { useEffect, useState } from 'react'

//@ts-ignore
import styles from './Shares.module.scss'
//@ts-ignore
import { Link } from 'react-router-dom'

//@ts-ignore
import exampleImg from '../../../Icons/section1.png'
import { blogs, guides } from 'datas/datas'

const Shares = (props: SharesProperties) => {
  const [shares, setShares] = useState<SharesData[]>([])

  useEffect(() => {
    if (props.sharesType.toLowerCase() == "blog") {
      setShares(blogs)

    }

    if (props.sharesType.toLowerCase() == "rehber") {
      setShares(guides)
    }
  }, [])

  return (
    <div>

      <h1 className={styles.title}>{props.title}</h1>
      <div className={styles["shares"]}>
        {shares.map((share, i) => (

          <div className={styles["shares__share"]} key={i}>
            <img className={styles["shares__share__image"]} src={share.image} title={share.title} />
            <p className={styles["shares__share__date-info"]}>
              <span className={styles["shares__share__date-info__date"]}>12 Haziran, 2023</span> | <span className={styles["shares__share__date-info__shareType"]}>{props.sharesType}</span>
            </p>
            <div className={styles["shares__share__contact"]}>
              <h2 className={styles["contact__title"]}>{share.title}</h2>
              <p className={styles["contact__description"]}>
                {share.description}
              </p>
              <Link className={styles["shares__share__button"]} to={"/blog/"+share.id}>Daha Fazla {">"}</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Shares
