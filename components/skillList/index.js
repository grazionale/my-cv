import styles from '../../styles/SkillList.module.css'
import SkillCard from '../skillCard'

const SkillList = () => {
  return (
    <ul className={styles.cards}>
      <li className={styles.card}>
        <SkillCard title="CSS Development" subtitle="projects"
          img="css-3.svg" imgAlt="css" percentage="92" />
      </li>

      <li className={styles.card}>
        <SkillCard title="HTML Development" subtitle="projects"
          img="html-5.svg" imgAlt="html" percentage="86" />
      </li>

      <li className={styles.card}>
        <SkillCard title="Javascript Dev" subtitle="projects"
          img="javascript.svg" imgAlt="javascript" percentage="60" />
      </li>
    </ul>
  )
}

export default SkillList;