import styles from '../../styles/SkillCard.module.css'

const SkillCard = ({ title, subtitle, img, imgAlt, percentage }) => {
  return (
    <>
      <img src={img} alt={imgAlt} />
      <div className={styles.cardInfo}>
        <h2>{title}</h2>
        <p>{subtitle}</p>
        <div className={`${styles.progress} ${styles.css}`}></div>
      </div>
      <h2 className={styles.percentage}>{percentage}%</h2>
    </>
  )
}

export default SkillCard;