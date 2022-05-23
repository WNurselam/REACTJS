import styles from './styles.module.css'

console.log("A",styles);
function B() {
    return (
        <div className={styles.title}>
            B
        </div>
    )
}

export default B;