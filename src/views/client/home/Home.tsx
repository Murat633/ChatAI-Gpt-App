import React from 'react'

//@ts-ignore
import styles from './Home.module.scss'

//@ts-ignore
import section1 from '../../../Icons/section1.png'
//@ts-ignore
import section2 from '../../../Icons/section2.png'

import RgbTitle from 'components/rgb-title/RgbTitle'
import ChatBox from 'components/chat-box/ChatBox'
import Section from 'components/section/Section'
import ContactBox from 'components/contact-form/ContactBox'

const Home = () => {
    // window.addEventListener("scroll", function () {
    //     // Scroll hareketi gerçekleştiğinde çalışacak kodlar buraya gelecek
    //     // Örneğin, scroll değerini alıp ona göre işlemler yapabilirsiniz
    //     var scrollY = window.scrollY;
    //     var element = this.document.getElementById("right")
    //     console.log("Scroll Y değeri: " + scrollY, element?.offsetTop);
    // });
    return (
        <div className={styles.home}>
            <RgbTitle colors={["#08faff", "#0044d1"]} text='Yardıma Mı İhtiyacınız var ?' />
            <RgbTitle colors={["#f288e8", "#f286b6"]} text='Yapay Zekaya Sorun' />

            <ChatBox />

            <div className={styles.sections}>
                <Section
                    title='AI Chatbot: Ask and Talk to AI about Anything'
                    description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni illum voluptate ab laborum alias similique, sunt nihil consectetur debitis, qui molestiae voluptatem architecto rem possimus obcaecati voluptatibus, harum beatae cum?'
                    btnText='Daha Fazla >'
                    imgUrl={section1}
                />
                <Section
                    title='AI Chatbot: Ask and Talk to AI about Anything'
                    description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni illum voluptate ab laborum alias similique, sunt nihil consectetur debitis, qui molestiae voluptatem architecto rem possimus obcaecati voluptatibus, harum beatae cum?'
                    btnText='Daha Fazla >'
                    imgUrl={section2}
                    promotionIsRight={true}

                />
                <Section
                    title='AI Chatbot: Ask and Talk to AI about Anything'
                    description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni illum voluptate ab laborum alias similique, sunt nihil consectetur debitis, qui molestiae voluptatem architecto rem possimus obcaecati voluptatibus, harum beatae cum?'
                    btnText='Daha Fazla >'
                    promotionItem={<ContactBox />}
                />
            </div>


        </div>
    )
}

export default Home
