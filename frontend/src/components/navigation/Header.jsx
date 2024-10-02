
import PropTypes from 'prop-types';
import { useState } from 'react';
import { Link } from "react-router-dom"; 
import LinkMenu from './LinkMenu';
import './Header.css';

const Header = ({config}) => {
  return (
    <header>
      <Link className="link-logo" title="retourner à la page d'accueil" to="/">
        <img src={config.logo} className='logo-img' alt="Logo"/>
      </Link>
      <div className='section-right'>
        <a href={config.instagram_url} className="link-instagram" title="aller à la page instagram" target="_blank">
          <img className="instagram-icon" src="/instagram.svg" alt=""/>
        </a>
        {config.menu && <MainMenu menu={config.menu}/>}
      </div>
    </header>
  )
}

const MainMenu = ({menu}) => {

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className='main-menu'>
      <button className={`burger ${isOpen ? 'toggle' : ''}`} onClick={toggleMenu}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
        <div className='overlay'></div>
      </button>
      <ul className={`nav-links ${isOpen ? 'toggle' : ''}`}>
        <LinkMenu arrayItem={menu} />
      </ul>
    </nav>
  )
}

Header.propTypes = {
  config: PropTypes.shape({
    logo: PropTypes.string.isRequired,
    instagram_url: PropTypes.string.isRequired,
    menu: PropTypes.array
  }).isRequired,
};

MainMenu.propTypes = {
  menu: PropTypes.array.isRequired
};

export default Header