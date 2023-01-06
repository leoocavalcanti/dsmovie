import {ReactComponent as GithubIcon} from 'assets/img/Github.svg';
import './styles.css';

function Navbar() {

    return (
        <header>
    <nav className="container">
        <div className="dsmovie-nav-content">
        <a href="/">
            <h1>DSMovie</h1>
            </a>
            <a href="https://github.com/leoocavalcanti" target="_blank" rel="noreferrer">
                <div className="dsmovie-contact-container">
                    <GithubIcon />
                    <p className="dsmovie-contact-link">/leoocavalcanti</p>
                </div>
            </a>
        </div>
    </nav>
</header>
    );
}


export default Navbar;