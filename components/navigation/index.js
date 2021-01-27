import styles from './Navigation.module.css'

const Navigation = ({ nextStep, previousStep }) => {

  return (
    <div className={styles.navigation}>
      <div className={styles.navigationItems}>
        <a href="#" onClick={() => previousStep()} className={styles.btn}>
          <i className="fa fa-terminal" aria-hidden="true"></i>
          <h2>Previus</h2>
        </a>
        <a href="#" onClick={() => nextStep()} className={styles.btn}>
          <i className="fa fa-terminal" aria-hidden="true"></i>
          <h2>Next</h2>
        </a>
      </div>
    </div>
  )
}

export default Navigation;