import { Button, Container, Typography } from '@mui/material';
import React from 'react';
import { NavLink } from 'react-router-dom';
import banner from '../../../images/banner/banner.jpg'


const bannerbg ={
    background: `url(${banner})`,
}

const Banner = () => {
    return (
        <div style={bannerbg}>
            <Container sx={{py: '300px' }}>
                <Typography variant="h3" gutterBottom component="div" style={{color: 'white' }}>
                    WELCOME TO AUTO CAR
                </Typography>
                <Typography variant="h6" gutterBottom component="div" style={{color: 'white' }}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                </Typography>
                <NavLink style={{ textDecoration: 'none', color: 'white' }} to="/carlisting">
                <Button variant="contained">Learn More</Button>
                </NavLink>
            </Container>
        </div>
    );
};

export default Banner;