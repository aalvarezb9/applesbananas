import styles from './Animacion.module.css';
// import libro from '../../utils/img/libro3.jpg';
import logo from '../../utils/img/LOGO.jpg';

const Animacion = () => {
    return (
        <div className={`${styles.banner} ${styles.contenedor}`} style={{height: '500px'}}>
            {/* <section className={styles.bannerTitle}>
                <div className={`${styles.title}`}>
                    <h2>
                        <b>Contáctenos</b>
                    </h2>
                </div>
            </section> */}
            <div className={`${styles.bannerImg}`}>
                <img src={logo} alt="Imagen de aprendizaje" />
            </div>
        </div>
    )
}

export default Animacion
