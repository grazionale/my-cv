import styles from "./TagCloud.module.css";
import SkillTag from "../skillTag";

const TagCloud = ({ data = [] }) => {
  return (
    <div className={styles.tagCloud}>
      {data.map(skill => (
        <SkillTag text={skill} />
      ))}
    </div>
  )
}

export default TagCloud;