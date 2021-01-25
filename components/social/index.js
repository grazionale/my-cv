import styles from '../../styles/Social.module.css'

const Social = ({ link, icon, text }) => {

  return (
    <div className={styles.link}>
      <a href={link} target="_blank">
        <i className={icon} aria-hidden="true"></i>
      </a>
      <a href={link} target="_blank" 
        className={styles.socialText}>{text}
      </a>
    </div>
  )
}

export default Social;