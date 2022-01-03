import styles from './Burbujas.module.css';

const Burbujas = ({color}) => {


    return (
        <div className={styles.burbujas}>
            <div style={{background: color}} className={styles.burbuja}></div>
            <div style={{background: color}} className={styles.burbuja}></div>
            <div style={{background: color}} className={styles.burbuja}></div>
            <div style={{background: color}} className={styles.burbuja}></div>
            <div style={{background: color}} className={styles.burbuja}></div>
        </div>
    )
}

export default Burbujas