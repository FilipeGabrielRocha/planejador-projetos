import './homeModule.css'

import saving from '../../../img/savings.svg'
import LinkButton from '../../layouts/linkButton/LinkButton';

function Home() {
  return (
  <section className='home_container'>
    <h1>Bem-vindo ao <span>Gerenciador de Projetos</span></h1>
    <p>Comece a gerenciar os seus proejtos agora mesmo!</p>
    <LinkButton to="/newproject" text="Criar Projeto" />
    <img src={saving} alt='Gerenciador de Projetos' />
  </section>
  );
}

export default Home;
