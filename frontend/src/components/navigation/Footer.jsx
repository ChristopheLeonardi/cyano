
import PropTypes from 'prop-types';
import { Link } from "react-router-dom"; 
import LinkMenu from './LinkMenu';
import './Footer.css';

const Footer = ({ config }) => {
  return(
    <footer>
    <Link className="logo-footer" title="retourner à la page d'accueil" to="/">
      <img src={config.logo_footer} className='logo-img' alt="Logo"/>
    </Link>
    <nav>
      <ul className="nav-links">      
        {config.menu && <LinkMenu arrayItem={config.menu}/>}
      </ul>
    </nav>
    <div className='mentions-footer'>
      <p>@Christophe Leonardi, tous droits réservés</p>
      <p>Design & développement : <a href='https://cleonardi.net' alt="Aller sur le site de design et dévelopemment" target='_blank'>cleonardi.net</a></p>
    </div>
  </footer>
  )

}
Footer.propTypes = {
  config: PropTypes.shape({
    logo_footer: PropTypes.string.isRequired,
    menu: PropTypes.array
  }).isRequired,
};


export default Footer;