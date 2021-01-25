import styles from '../styles/Home.module.css'
import Social from '../components/social'
import Seo from '../components/seo'
import User from '../components/user'
import TagPro from '../components/tagPro'
import SectionTitle from '../components/sectionTitle'
import SkillList from '../components/skillList'

export default function Home() {
  return (
    <>
      <Seo />
      <main>
        <section className={styles.glass}>
          <div className={styles.dashboard}>
            <User />
            <div className={styles.links}>
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

          <div className={styles.codes}>
            <SectionTitle text="Software Engineer" />
            <SkillList />
            <div className={styles.footer}>
              <a href="#" className={styles.previus}>
                <i className="fa fa-terminal" aria-hidden="true"></i>
                <h2>Skills</h2>
              </a>
              <a href="#" className={styles.next}>
                <i className="fa fa-terminal" aria-hidden="true"></i>
                <h2>Skills</h2>
              </a>
            </div>
          </div>

        </section>
      </main>
    </>
  )
}
