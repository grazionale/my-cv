import StepWizard from 'react-step-wizard';
import Seo from '../components/seo'
import SectionTitle from '../components/sectionTitle'
import SkillList from '../components/skillList'
import Content from '../components/content'
import SideBar from '../components/sidebar'
import Glass from '../components/glass'
import Step from '../components/step';
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Seo />
      <main>
        <Glass>
          <SideBar />
          <Content>
            <SectionTitle text="Software Engineer" />
            <StepWizard initialStep={1} className={styles.stepWizard}>
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
