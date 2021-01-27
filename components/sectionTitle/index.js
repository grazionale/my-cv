import styles from '../../styles/SectionTitle.module.css'

const SectionTitle = ({ text }) => {
  return (
    <div className={styles.title}>
      <h1>{text}</h1>
      <input type="text" disabled />
    </div>
  )
}

export default SectionTitle;