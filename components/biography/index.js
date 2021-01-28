import styles from './Biography.module.css'
import SectionTitle from '../sectionTitle';
import TagCloud from '../tagCloud';
import Paragraph from '../shared/paragraph';

const Biography = () => {
  const skills = [
    'Java (Spring Boot)',
    '.Net Core',
    '.Net Framework',
    'NodeJs',
    'NestJs',
    'Ruby on Rails',
    'HTML5',
    'CSS3',
    'JavaScript',
    'TypeScript',
    'AngularJs',
    'Angular 7',
    'ReactJs',
    'NextJs',
    'Bootstrap',
    'Tailwind',
    'Ionic',
    'React Native',
    'MongoDb',
    'MySQL',
    'Oracle PL/SQL',
    'SQL Server',
    'Postgres',
    'Docker',
    'CI/CD',
    'Jest',
    'Git',
    'RabbitMQ',
    'Redis',
    'AWS',
    'Application Insights',
    'Jira',
    'Monday',
    'Scrum',
    'Wordpress',
    'Magento'];
  
  return (
    <>
      <SectionTitle text="Quem sou eu?" />
      <div className={styles.biography}>
        <Paragraph>
          Engenheiro de Software graduado pela Universidade Tecnológica Federal do Paraná.
        </Paragraph>
        <br />
        <Paragraph>
          Amante do desenvolvimento web, atualmente atuo como tech lead desenvolvedor full stack, participando da concepção e construção de novos produtos de software, buscando unir tecnologia com entrega de valor.
        </Paragraph>
        <br />
        <Paragraph>
          Em minha trajetória, tive a oportunidade de trabalhar com diversas tecnologias, empresas e clientes. Construindo softwares para setores como varejo, fabril, transporte, financeiro e agora para o setor solar.
        </Paragraph>
      </div>
      <TagCloud data={skills} />
    </>
  )
}

export default Biography;