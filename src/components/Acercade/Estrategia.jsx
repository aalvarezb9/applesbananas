import Texto from '../Contacto/Texto';
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination"
import "swiper/css/navigation"
import styles from './Estrategia.module.css';

import SwiperCore, {
    Parallax,Pagination,Navigation
} from 'swiper';

  // install Swiper modules
SwiperCore.use([Parallax,Pagination,Navigation]);

const Estrategia = () => {

    const parrafo = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat temporibus alias quisquam voluptatem natus culpa voluptas, hic assumenda veritatis sunt earum omnis itaque cupiditate ea quas minus ab ipsam dicta.'

    return (
        <>
            <Swiper 
                style={{'--swiper-navigation-color': '#F4E1A1','--swiper-pagination-color': '#F4E1A1'}} 
                speed={600} parallax={true} 
                pagination={{"clickable": true}} 
                navigation={true} 
                className={`${styles.swiperSlide} ${styles.swiper}`}
            >
                <div 
                    slot="container-start" 
                    className={styles.parallaxBg} 
                    data-swiper-parallax="-23%"
                >                
                </div>
                <SwiperSlide className={styles.swiperSlide2} >
                    <div className={styles.title} data-swiper-parallax="-300">MISIÓN</div>
                    {/* <div className={styles.subtitle} data-swiper-parallax="-200">
                        Psicólogo
                    </div> */}
                    <div className={styles.text} data-swiper-parallax="-100">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam dictum mattis velit, sit amet faucibus
                            felis iaculis nec. Nulla laoreet justo vitae porttitor porttitor. Suspendisse in sem justo. Integer laoreet
                            magna nec elit suscipit, ac laoreet nibh euismod. Aliquam hendrerit lorem at elit facilisis rutrum. Ut at
                            ullamcorper velit. Nulla ligula nisi, imperdiet ut lacinia nec, tincidunt ut libero. Aenean feugiat non eros
                            quis feugiat.
                        </p>
                    </div>
                </SwiperSlide>
                <SwiperSlide className={styles.swiperSlide2} >
                    <div className={styles.title} data-swiper-parallax="-300">VISIÓN</div>
                    {/* <div className={styles.subtitle} data-swiper-parallax="-200">Subtitle</div> */}
                    <div className={styles.text} data-swiper-parallax="-100">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam dictum mattis velit, sit amet faucibus
                        felis iaculis nec. Nulla laoreet justo vitae porttitor porttitor. Suspendisse in sem justo. Integer laoreet
                        magna nec elit suscipit, ac laoreet nibh euismod. Aliquam hendrerit lorem at elit facilisis rutrum. Ut at
                        ullamcorper velit. Nulla ligula nisi, imperdiet ut lacinia nec, tincidunt ut libero. Aenean feugiat non eros
                        quis feugiat.</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide className={styles.swiperSlide2} >
                    <div className={styles.title} data-swiper-parallax="-300">OBJETIVOS</div>
                    {/* <div className={styles.subtitle} data-swiper-parallax="-200">Subtitle</div> */}
                    <div className={styles.text} data-swiper-parallax="-100">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam dictum mattis velit, sit amet faucibus
                        felis iaculis nec. Nulla laoreet justo vitae porttitor porttitor. Suspendisse in sem justo. Integer laoreet
                        magna nec elit suscipit, ac laoreet nibh euismod. Aliquam hendrerit lorem at elit facilisis rutrum. Ut at
                        ullamcorper velit. Nulla ligula nisi, imperdiet ut lacinia nec, tincidunt ut libero. Aenean feugiat non eros
                        quis feugiat.</p>
                    </div>
                </SwiperSlide>
            </Swiper>
            {/* <Texto titulo={'Misión'} ancho={'90%'} parrafo={parrafo} />
            <Texto titulo={'Visión'} ancho={'90%'} parrafo={parrafo} />
            <Texto titulo={'Objetivos'} ancho={'90%'} parrafo={parrafo} /> */}
        </>
    )
}

export default Estrategia
