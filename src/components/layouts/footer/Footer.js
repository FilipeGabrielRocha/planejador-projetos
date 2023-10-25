import { Link } from "react-router-dom";

import "./footerModule.css";

import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaLinkedin,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <ul className="social_list">
        <li>
          <Link to={"/"}>
            <FaFacebookSquare />
          </Link>
        </li>
        <li>
          <Link to={"https://www.instagram.com/_filiperochaa/"} target="_blank">
            <FaInstagramSquare />
          </Link>
        </li>
        <li>
          <Link to={"https://www.linkedin.com/in/filipe-gabriel-rocha/"} target="_blank">
            <FaLinkedin />
          </Link>
        </li>
      </ul>
      <p className="copy_right">
        <span>Gerenciador de Projetos</span> &copy; 2023
      </p>
    </footer>
  );
}

export default Footer;
