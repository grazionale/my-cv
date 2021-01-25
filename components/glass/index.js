import styles from '../../styles/Glass.module.css'

const Glass = ({ children }) => {
  return (
    <section className={styles.glass}>
      {children}
    </section>
  )
}

export default Glass;