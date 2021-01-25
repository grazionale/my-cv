import styles from '../../styles/SectionTitle.module.css'

const SectionTitle = ({ text }) => {
  return (
    <div className={styles.status}>
      <h1>{text}</h1>
      <input type="text" />
    </div>
  )
}

export default SectionTitle;