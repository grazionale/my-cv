import styles from '../../styles/Biography.module.css'
import SectionTitle from '../sectionTitle';
import TagCloud from '../tagCloud';

const Biography = () => {

  return (
    <>
      <SectionTitle text="Software Engineer" />
      <div className={styles.biography}>
        <p >
          Engenheiro de Software graduado pela Universidade Tecnológica Federal do Paraná.
        </p>
        <p>
          Amante do desenvolvimento web, atualmente atuo como tech lead desenvolvedor full stack, participando da concepção e construção de novos produtos de software, buscando unir tecnologia com entrega de valor.
        </p>
        <p>
          Em minha trajetória, tive a oportunidade de trabalhar com diversas tecnologias, empresas e clientes. Construindo softwares para setores como varejo, fabril, transporte, financeiro e solar.
        </p>
      </div>
      <TagCloud />
    </>
  )
}

export default Biography;