import React from 'react';
import '../styles/Styles.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faGithub} from '@fortawesome/free-brands-svg-icons';
import {faCircleInfo} from  '@fortawesome/free-solid-svg-icons';

const Footer: React.FC = () => {
    return (
      <>
        <footer>
          <div className='footer'>
            <span>
                This is an unofficial product. This app has no affiliation with FIA, FOM, Formula One or any of its teams.
            </span>
            <span className='footer-media'>
              <FontAwesomeIcon icon={faGithub}/>
              <a href='https://github.com/SRH8/pitwall-f1-app'>
                GitHub
              </a>
            </span>
            <span className='footer-media'>
              <FontAwesomeIcon icon={faCircleInfo}/>
              <a href=''>
                About
              </a>
            </span>
          </div>
        </footer>

      </>

    );
}

export default Footer;