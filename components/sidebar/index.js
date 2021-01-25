import styles from '../../styles/SideBar.module.css'
import Social from '../social';
import TagPro from '../tagPro';
import User from '../user';

const SideBar = ({ link, icon, text }) => {

  return (
    <div className={styles.dashboard}>
      <User />
      <div>
        <Social link="https://www.linkedin.com/in/gabriel-grazionale-gomes-fernandes-08b331144/"
          icon="fa fa-linkedin-square" text="Linkedin" />
        <Social link="https://github.com/grazionale" icon="fa fa-github"
          text="Github" />
        <Social link="https://www.instagram.com/gabrielgrz/"
          icon="fa fa-instagram" text="Instagram" />
        <Social link="mailto:gabrielgrazionale@hotmail.com.com"
          icon="fa fa-envelope" text="E-mail" />
      </div>
      <TagPro text="Hello World!" />
    </div>
  )
}

export default SideBar;