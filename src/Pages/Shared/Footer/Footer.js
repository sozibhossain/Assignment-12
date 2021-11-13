import { Button, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import { NavLink } from 'react-router-dom';

const Footer = () => {
    return (
        <>
            <div style={{backgroundColor: "aqua", paddingTop: '70px', paddingBottom: '30px'}}>
                <Container>
                    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                        <Grid item xs={4} sm={4} md={3}>
                            <Typography variant="h5" gutterBottom component="div">
                                AUTOCAR
                            </Typography>
                            <Typography variant="body1" gutterBottom>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                                blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,
                                neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum
                                quasi quidem quibusdam.
                            </Typography>
                        </Grid>
                        <Grid item xs={4} sm={4} md={3}>
                            <Typography variant="h5" gutterBottom component="div">
                                Contact Info
                            </Typography>
                            <Typography variant="body1" gutterBottom>
                            20/F Green Road, Dhanmondi, Dhaka
                            </Typography>
                            <Typography variant="body1" gutterBottom>
                            info@themevessel.com
                            </Typography>
                            <Typography variant="body1" gutterBottom>
                            +0477 85X6 552
                            </Typography>
                            <Typography variant="body1" gutterBottom>
                            +0477 85X6 552
                            </Typography>
                            
                        </Grid>
                        <Grid item xs={4} sm={4} md={3}>
                            <Typography variant="h5" gutterBottom component="div">
                                Useful Links
                            </Typography>
                            <NavLink style={{ textDecoration: 'none'}} to="/login">
                                Login
                            </NavLink>
                            <NavLink style={{ textDecoration: 'none'}} to="/login">
                                Login
                            </NavLink>
                            <NavLink style={{ textDecoration: 'none'}} to="/login">
                                Login
                            </NavLink>
                            <NavLink style={{ textDecoration: 'none'}} to="/login">
                                Login
                            </NavLink>
                        </Grid>
                        <Grid item xs={4} sm={4} md={3}>
                            <Typography variant="h5" gutterBottom component="div">
                                Subscribe
                            </Typography>
                            <Typography variant="body1" gutterBottom>
                                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit.
                            </Typography>
                        </Grid>
                    </Grid>
            </Container>
            </div>
            <div style={{backgroundColor: "aqua", padding: '2px', textAlign: 'center'}}>
                <Container>
                    <Typography variant="body1" gutterBottom>
                        © 2019 Theme Vessel. All Rights Reserved.
                    </Typography>
                </Container>
            </div>
        </>
    );
};

export default Footer;