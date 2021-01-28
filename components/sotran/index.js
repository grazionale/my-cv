import SectionTitle from '../sectionTitle';
import TagCloud from '../tagCloud';
import Paragraph from '../shared/Paragraph';

const Sotran = () => {
  const skills = [
    '.Net Core',
    '.Net Framework',
    'NodeJs',
    'NestJs',
    'HTML5',
    'CSS3',
    'JavaScript',
    'TypeScript',
    'AngularJs',
    'ReactJs',
    'Bootstrap',
    'MongoDb',
    'MySQL',
    'SQL Server',
    'Postgres',
    'Docker',
    'CI/CD',
    'Testes Automatizados',
    'Jest',
    'Git',
    'Trunk Base Development',
    'RabbitMQ',
    'Application Insights',
    'Jira',
    'Scrum'
  ];

  return (
    <>
      <SectionTitle text="Sotran" />
      <Paragraph level={2}>2020</Paragraph>
      <Paragraph>
        Desenvolvedor do Squad de Pagamentos, e mentor de novos colaboradores. Responsável pela estruturação, projeção e desenvolvimento do novo sistema de conta digital do caminhoneiro Sotran. Sistema multi empresa, escalável e totalmente automatizado.
      </Paragraph>
      <Paragraph level={2}>2019</Paragraph>
      <Paragraph>
      Desenvolvedor responsável pela criação de novos produtos que agregam valor aos clientes da Sotran. Dois exemplos de produtos construídos neste ano foram:
      <ul>
        <li>
          <Paragraph>- Sistema de integração de lotes que permite os clientes da Sotran realizarem o cadastro dos próprios lotes (cargas) dentro da aplicação da Sotran, disponibilizando-os aos nossos motoristas.</Paragraph>
        </li>
        <li>
          <Paragraph>- "Cockpit", um painel que entrega visibilidade total dos lotes ofertados por nossos clientes dentro da aplicação da Sotran. Permitindo o acompanhamento desde o cadastro até o momento que o motorista realiza a entrega no destino final.</Paragraph>
        </li>
      </ul>
      
      </Paragraph>

      <TagCloud data={skills} />
    </>
  )
}

export default Sotran;