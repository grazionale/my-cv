import Navigation from "../navigation";
import styles from "../../styles/Step.module.css";

const Step = ({children, nextStep, previousStep}) => {
  return (
    <div className={styles.step}>
      <Navigation nextStep={nextStep} previousStep={previousStep} />
      {children}
    </div>
  )
}

export default Step;