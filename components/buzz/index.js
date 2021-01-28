import SectionTitle from '../sectionTitle';
import TagCloud from '../tagCloud';
import Paragraph from '../shared/paragraph';

const Buzz = () => {
  const skills = [
    'HTML5',
    'CSS3',
    'JavaScript',
    'Bootstrap',
    'MySQL',
    'Git',
    'AWS',
    'Trello',
    'Wordpress',
    'Magento',
    'Magento 2'
  ];

  return (
    <>
      <SectionTitle text="Buzz" />
      <div>
        <Paragraph level={2}>Principais Atividades:</Paragraph>
        <ul>
          <li>
            <Paragraph>
              - Levantamento de requisitos com os clientes envolvidos;
            </Paragraph>
          </li>
          <li>
            <Paragraph>
              - Manutenção e melhoria nos websites e lojas virtuais dos clientes existentes;
            </Paragraph>
          </li>
          <li>
            <Paragraph>
              - Criação de novos websites e lojas virtuais;
            </Paragraph>
          </li>
          <li>
            <Paragraph>
              - Integrações com métodos de pagamento;
            </Paragraph>
          </li>
          <li>
            <Paragraph>
              - Deploy de aplicações em servidores compartilhados e dedicados;
            </Paragraph>
          </li>
          <li>
            <Paragraph>
              - Entrega e apresentação dos projetos;
            </Paragraph>
          </li>
        </ul>
      </div>
      <TagCloud data={skills} />
    </>
  )
}

export default Buzz;