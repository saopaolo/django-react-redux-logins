import { IconButton, Collapse  } from '@mui/material';
import React, { useEffect, useState } from 'react';
import './WelcomePageHeader.css';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Link as Scroll } from 'react-scroll';

function WelcomePageHeader() {

    const [checked, setChecked] = useState(false);
    useEffect(() => {
    setChecked(true);
    }, []);

  return (
    <div className='welcomePageHeader' id='headerEmo'>
        <Collapse
        in={checked}
        {...(checked ? { timeout: 1000 } : {})}
        collapsedHeight={50}
        >
        <div className='welcome__box'>
          <h1 className='welcome__title'>
            Welcome to <br />
            <span className='welcome__color__text__pro'>Pro</span><span className='welcome__color__text'>sperity.</span>
          </h1>
          <Scroll to='objective-to-check' smooth={true}>
            <IconButton>
              <ExpandMoreIcon className='go__down' />
            </IconButton>
          </Scroll>
        </div>
        </Collapse>
    </div>
  )
}

export default WelcomePageHeader