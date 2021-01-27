import StepWizard from 'react-step-wizard';
import Seo from '../components/seo'
import SkillList from '../components/skillList'
import Content from '../components/content'
import SideBar from '../components/sidebar'
import Glass from '../components/glass'
import Step from '../components/step'
import Biography from '../components/biography'
import styles from '../styles/Home.module.css'
import Navigation from '../components/navigation';

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
                <SkillList />
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
