import './contactModule.css'

import {TfiEmail} from 'react-icons/tfi'

function Contact() {
  return (
    <div className='container_contato'>
      <h2>Formas de entrar em contato</h2>
      <div>
        <p><span><TfiEmail /></span> filiperochaprogramador@gmail.com</p>
        <p><span><TfiEmail /></span> filiperocha844@gmail.com</p>
        <p><span><TfiEmail /></span> filipegrocha1430@gmail.com</p>
      </div>
    </div>
  );
}

export default Contact;
