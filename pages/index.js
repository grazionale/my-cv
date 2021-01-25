import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Gabriel Grazionale</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
          integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossorigin="anonymous" />
      </Head>
      <main>
        <section className={styles.glass}>
          <div className={styles.dashboard}>
            <div className={styles.user}>
              <img src="avatar.jpeg" alt="Gabriel Grazionale" />
              <h3>Gabriel Grazionale</h3>
              <p>Software Engenieer</p>
            </div>

            <div className={styles.links}>
              <ul>
                <li className={styles.link}>
                  <a href="https://www.linkedin.com/in/gabriel-grazionale-gomes-fernandes-08b331144/" target="_blank">
                    <i className="fa fa-linkedin-square" aria-hidden="true"></i>
                  </a>
                  <a href="https://www.linkedin.com/in/gabriel-grazionale-gomes-fernandes-08b331144/" target="_blank" 
                    className={styles.socialText}>Linkedin
                  </a>
                </li>
                <li className={styles.link}>
                  <a href="https://github.com/grazionale" target="_blank"><i className="fa fa-github"
                    aria-hidden="true"></i></a>
                  <a href="https://github.com/grazionale" target="_blank" className={styles.socialText}>Github</a>
                </li>
                <li className={styles.link}>
                  <a href="https://www.instagram.com/gabrielgrz/" target="_blank"><i className="fa fa-instagram"
                    aria-hidden="true"></i></a>
                  <a href="https://www.instagram.com/gabrielgrz/" target="_blank" className={styles.socialText}>Instagram</a>
                </li>
                <li className={styles.link}>
                  <a href="mailto:gabrielgrazionale@hotmail.com.com"><i className="fa fa-envelope" aria-hidden="true"></i></a>
                  <a href="mailto:gabrielgrazionale@hotmail.com.com" target="_blank" className={styles.socialText}>E-mail</a>
                </li>
              </ul>
            </div>

            <div className={styles.pro}>
              <h2>Hello World!</h2>
              <a href="#"><i className="fa fa-code" aria-hidden="true"></i></a>
            </div>
          </div>

          <div className={styles.codes}>
            <div className={styles.status}>
              <h1>Software Engenieer</h1>
              <input type="text" />
            </div>

            <ul className={styles.cards}>
              <li className={styles.card}>
                <img src="css-3.svg" alt="css" />
                <div className={styles.cardInfo}>
                  <h2>CSS Development</h2>
                  <p>projects</p>
                  <div className={`${styles.progress} ${styles.css}`}></div>
                </div>
                <h2 className={styles.percentage}>92%</h2>
              </li>

              <li className={styles.card}>
                <img src="html-5.svg" alt="css" />
                <div className={styles.cardInfo}>
                  <h2>HTML Development</h2>
                  <p>projects</p>
                  <div className={`${styles.progress} ${styles.html}`}></div>
                </div>
                <h2 className={styles.percentage}>86%</h2>
              </li>

              <li className={styles.card}>
                <img src="javascript.svg" alt="css" />
                <div className={styles.cardInfo}>
                  <h2>Javascript Dev</h2>
                  <p>projects</p>
                  <div className={`${styles.progress} ${styles.js}`}></div>
                </div>
                <h2 className={styles.percentage}>60%</h2>
              </li>
            </ul>
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
    </div>
  )
}
