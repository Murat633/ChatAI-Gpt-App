import React from 'react'

//@ts-ignore
import styles from './Section.module.scss'

const Section = (props: SectionProperty) => {
    return (
        <section className={styles["section"]}>
            <div className={styles["section__description"]}>
                <h2 className={styles["section__description__title"]}>{props.title}</h2>
                <p className={styles["section__description__desc"]}>{props.description}</p>
                <button className={styles["section__description__btn"]}>{props.btnText || "Daha Fazla >"}</button>
            </div>

            <div id={props.promotionIsRight ? "right" : "left"} className={styles["section__promotion"]}>
                {props.imgUrl && !props.promotionItem && (
                    <img className={styles["section__promotion__img"]} src={props.imgUrl} alt={props.title} />
                )}

                {!props.imgUrl && props.promotionItem && (
                    props.promotionItem
                )}

                {!props.imgUrl && !props.promotionItem && (
                    <div className={styles.empty}>
                        <span>Herhangi Bir Öğe Eklemediniz.</span>
                    </div>
                )}
            </div>

        </section>
    )
}

export default Section
