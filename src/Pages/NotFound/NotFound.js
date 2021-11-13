import { Button } from '@mui/material';
import React from 'react';
import { NavLink } from 'react-router-dom';
import notFoud from '../../images/notfound/notfound.jpg'

const notfoudbg = {
    background : `url(${notFoud})`,
}

const NotFound = () => {
    return (
        <div style={notfoudbg}>
            <div style={{paddingTop: '350px', paddingLeft: '50px'}}>
                <NavLink style={{ textDecoration: 'none', color: 'white',}} to="/home">
                    <Button variant="contained">Go Back</Button>
                </NavLink>
            </div>
        </div>
    );
};

export default NotFound;