import './footerModule.css'

import {FaFacebookSquare, FaInstagramSquare, FaLinkedin} from 'react-icons/fa'

function Footer(){
    return(
        <footer className='footer'>
            <ul className='social_list'>
                <li><FaFacebookSquare /></li>
                <li><FaInstagramSquare /></li>
                <li><FaLinkedin /></li>
            </ul>
            <p className='copy_right'><span>Gerenciador de Projetos</span> &copy; 2023</p>
        </footer>
    )
}

export default Footer