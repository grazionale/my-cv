import styles from './Navigation.module.css'

const Navigation = ({ nextStep, previousStep }) => {

  return (
    <div className={styles.navigation}>
      <div className={styles.navigationItems}>
        <a href="#" onClick={() => previousStep()} className={styles.btn}>
          <i className="fa fa-angle-left" aria-hidden="true"></i>
        </a>
        <a href="#" onClick={() => nextStep()} className={styles.btn}>
          <i className="fa fa-angle-right" aria-hidden="true"></i>
        </a>
      </div>
    </div>
  )
}

export default Navigation;