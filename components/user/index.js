import styles from '../../styles/User.module.css'

const User = () => {
  return (
    <div className={styles.user}>
      <img src="avatar.jpeg" alt="Gabriel Grazionale" />
      <h3>Gabriel Grazionale</h3>
      <p>Software Engenieer</p>
    </div>
  )
}

export default User;