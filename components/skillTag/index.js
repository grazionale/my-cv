import styles from "./SkillTag.module.css";

const SkillTag = ({text}) => {
  return (
    <div className={styles.tag}>
      <p>{text}</p>
    </div>
  )
}

export default SkillTag;