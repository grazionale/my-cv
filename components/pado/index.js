import SectionTitle from '../sectionTitle';
import TagCloud from '../tagCloud';
import Paragraph from '../shared/paragraph';

const Pado = () => {
  const skills = [
    'Java',
    '.Net Core',
    '.Net Framework',
    'NodeJs',
    'HTML5',
    'CSS3',
    'JavaScript',
    'Bootstrap',
    'Ionic',
    'MySQL',
    'Oracle PL/SQL',
    'Git',
    'Linux',
    'Trello',
    'Scrum',
    'Wordpress',
  ];

  return (
    <>
      <SectionTitle text="Pado" />
      <Paragraph level={2}>Principais Atividades:</Paragraph>
      <ul>
        <li>
          <Paragraph>
            - Levantamento de requisitos com os setores envolvidos;
            </Paragraph>
        </li>
        <li>
          <Paragraph>
            - Elaboração e documentação de projetos;
            </Paragraph>
        </li>
        <li>
          <Paragraph>
            - Manutenção e melhoria nos sistemas existentes da área administrativa e da fábrica (Intranet, BI, Sistema de Gestão, Sistema de Expedição utilizado pela fábrica, Sistema de Demandas utilizado pela Fábrica);
            </Paragraph>
        </li>
        <li>
          <Paragraph>
            - Elaboração de consultas complexas utilizando SQL + PL/SQL (Oracle) para a criação de views utilizadas pelo BI;
            </Paragraph>
        </li>
        <li>
          <Paragraph>
            - Criação de integrações entre ERP Focco e CRM Sales Force;
            </Paragraph>
        </li>
        <li>
          <Paragraph>
            - Participação na manutenção dos servidores do datacenter da empresa;
            </Paragraph>
        </li>
        <li>
          <Paragraph>
            - Constante contato com os colaboradores da empresa;
            </Paragraph>
        </li>
      </ul>
      <Paragraph level={2}>Principais Projetos:</Paragraph>
      <ul>
        <li>
          <Paragraph>
            - Criação do website da Pado 2019;
          </Paragraph>
          <Paragraph>
            - Criação do simulador de porta e fechaduras da Pado 2019;
          </Paragraph>
          <Paragraph>
            - Criação da integração entre ERP Focco com o CRM Sales Force;
          </Paragraph>
        </li>
      </ul>
      <TagCloud data={skills} />
    </>
  )
}

export default Pado;