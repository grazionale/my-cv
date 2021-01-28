import styles from "./Step.module.css";

const Step = ({children, nextStep, previousStep}) => {
  return (
    <div className={styles.step}>
      {children}
    </div>
  )
}

export default Step;