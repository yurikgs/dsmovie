import { Link } from 'react-router-dom';
import {ReactComponent as GithubIcon} from '../../assets/img/github.svg';
import './styles.css'
function Navbrar() {


  
  return (
    <header  className="dsmovie-nav-content">
    <nav className="container">
        <div className="dsmovie-nav-content text-white">
            
            <Link to="/" >
               <h1 className="text-white text-decoration-none link-hover">DSMovie</h1>
            </Link>
            
            
            <a href="https://github.com/devsuperior" target="_blank" rel="noreferrer">
                <div className="dsmovie-contact-container">
                    <GithubIcon />
                    <p className="dsmovie-contact-link">/devsuperior</p>
                </div>
            </a>
        </div>
    </nav>
</header>
  )

  }    export default Navbrar