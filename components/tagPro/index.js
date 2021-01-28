import styles from './TagPro.module.css'

const TagPro = ({text}) => {
  return (
    <div className={styles.pro}>
      <h2>{text}</h2>
      <a href="#"><i className="fa fa-code" aria-hidden="true"></i></a>
    </div>
  )
}

export default TagPro;