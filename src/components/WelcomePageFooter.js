import React from 'react';
import './WelcomePageFooter.css'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import { Link } from 'react-router-dom';


function WelcomePageFooter() {
  return (
      <div className='welcomePageFooter'>
        <footer>
            <div className="welcomePageFooter__container">
                <div className="welcomePageFooter__row">
                    <div className="welcomePageFooter__linksContainer">
                        <h3>Services</h3>
                        <ul>
                            <li><a href="#">Admission</a></li>
                            <li><a href="#">Assist</a></li>
                            <li><a href="#">Guid</a></li>
                        </ul>
                    </div>
                    <div className="welcomePageFooter__linksContainer">
                        <h3>Links</h3>
                        <ul>
                            <li><a><Link to='/about'>About</Link></a></li>
                            <li><a><Link to='/contact'>Contact</Link></a></li>
                            <li><a>Careers</a></li>
                        </ul>
                    </div>
                    <div className="welcomePageFooter__linksContainer welSmallBox">
                        <h3>Prosperity</h3>
                        <p className='welcomepageFooter__desc'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    </div>
                </div>
                <div className='social__icons'>
                        <a href="#">
                            <i >
                                <FacebookIcon />
                            </i>
                        </a>
                        <a href="#">
                            <i >
                                <InstagramIcon />
                            </i>
                        </a>
                        <a href="#">
                            <i>
                                <TwitterIcon />
                            </i>
                        </a>
                    </div>
                <p className='copyright'>Prosperity © 2022</p>
            </div>
        </footer>
    </div>
  )
}

export default WelcomePageFooter;