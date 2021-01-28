import StepWizard from 'react-step-wizard';
import Seo from '../components/seo'
import SkillList from '../components/skillList'
import Content from '../components/content'
import SideBar from '../components/sidebar'
import Glass from '../components/glass'
import Step from '../components/step'
import Biography from '../components/biography'
import Buzz from '../components/buzz'
import styles from '../styles/Home.module.css'
import Navigation from '../components/navigation';
import Pado from '../components/pado';
import Sotran from '../components/sotran';

export default function Home() {
  return (
    <>
      <Seo />
      <main>
        <Glass>
          <SideBar />
          <Content>
            <StepWizard initialStep={1} className={styles.stepWizard} nav={<Navigation/>}>
              <Step>
                <Biography />
              </Step>
              <Step>
                <Buzz />
              </Step>
              <Step>
                <Pado />
              </Step>
              <Step>
                <Sotran />
              </Step>
              <Step>
                <SkillList />
              </Step>
            </StepWizard>
          </Content>
        </Glass>
      </main>
    </>
  )
}
