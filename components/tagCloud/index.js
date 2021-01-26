import styles from "../../styles/TagCloud.module.css";
import SkillTag from "../SkillTag";

const TagCloud = () => {
  return (
    <div className={styles.tagCloud}>
      <SkillTag text="PHP" />
      <SkillTag text="Javascript" />
      <SkillTag text=".Net Core" />
      <SkillTag text="MySql" />
      <SkillTag text="Oracle" />
      <SkillTag text="SQL Server" />
      <SkillTag text="Ruby on Rails" />
    </div>
  )
}

export default TagCloud;