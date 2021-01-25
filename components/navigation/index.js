import styles from '../../styles/Navigation.module.css'

const Navigation = ({ nextStep, previousStep }) => {

  return (
    <div className={styles.footer}>
      <div className={styles.footerItems}>
        <a href="#" onClick={() => previousStep()} className={styles.previus}>
          <i className="fa fa-terminal" aria-hidden="true"></i>
          <h2>Previus</h2>
        </a>
        <a href="#" onClick={() => nextStep()} className={styles.next}>
          <i className="fa fa-terminal" aria-hidden="true"></i>
          <h2>Next</h2>
        </a>
      </div>
    </div>
  )
}

export default Navigation;