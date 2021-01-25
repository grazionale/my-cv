import Navigation from "../navigation";
import styles from "../../styles/Step.module.css";

const Step = ({children, nextStep, previousStep}) => {
  return (
    <div className={styles.step}>
      {children}
      <div className={styles.stepFooter}>
        <Navigation nextStep={nextStep} previousStep={previousStep} />
      </div>
    </div>
  )
}

export default Step;