import styles from '../../styles/Navigation.module.css'

const Navigation = ({ link, icon, text }) => {

  return (
    <div className={styles.footer}>
      <a href="#" className={styles.previus}>
        <i className="fa fa-terminal" aria-hidden="true"></i>
        <h2>Skills</h2>
      </a>
      <a href="#" className={styles.next}>
        <i className="fa fa-terminal" aria-hidden="true"></i>
        <h2>Skills</h2>
      </a>
    </div>
  )
}

export default Navigation;