import styles from './Paragraph.module.css'

const Paragraph = ({ children, level = 1 }) => {
  const levels = {
    1: 'paragraph-1',
    2: 'paragraph-2',
  }

  return (
    <p className={`${styles[levels[level]]}`}>
      {children}
    </p>
  )
}

export default Paragraph;