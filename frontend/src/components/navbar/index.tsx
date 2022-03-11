import {ReactComponent as GitIcon} from 'assets/img/github.svg'
import  './styles.css'


function Navbar(){
    return (
      <>
        <header>
          <nav className='container'>
            <div className="dsmovie-nav-content">
              <h1>DsMovie</h1>
              <a
                href="https://github.com/wll-machado"
                target="_blank"
                rel="noreferrer"
              >
                <div className="dsmovie-contact-container">
                  <GitIcon /><p className="dsmovie-contact-link">/wll-machado</p>
                </div>
                
              </a>
            </div>
          </nav>
        </header>
      </>
    );
}

export default Navbar;