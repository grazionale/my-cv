import styles from '../styles/Home.module.css'
import Social from '../components/social'
import Seo from '../components/seo'
import User from '../components/user'
import TagPro from '../components/tagPro'
import SectionTitle from '../components/sectionTitle'
import SkillList from '../components/skillList'
import Content from '../components/content'
import SideBar from '../components/sidebar'
import Navigation from '../components/navigation'
import Glass from '../components/glass'

export default function Home() {
  return (
    <>
      <Seo />
      <main>
        <Glass>
          <SideBar />
          <Content>
            <SectionTitle text="Software Engineer" />
            <SkillList />
            <Navigation />
          </Content>
        </Glass>
      </main>
    </>
  )
}
