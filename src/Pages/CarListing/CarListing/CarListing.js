import { Alert, Button, Container, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import Navigation from '../../Shared/Navigation/Navigation';
import CarDitails from '../CarDitails/CarDitails';
import listing from '../../../images/banner/listing2.jpg';
import Footer from '../../Shared/Footer/Footer';
import useAuth from '../../../Hooks/useAuth';


const listingbg = {
    background: `url(${listing})`
}

const CarListing = () => {
    // const [ token] = useAuth();
    const [cartSuccess, setCartSuccess] = useState(false);

    const [products, setProducts] = useState([]);


    useEffect(() => {
        fetch('http://localhost:5000/products', {
            // headers: {
            //     'authorization': `Bearer ${token}`
            // }
        })

        .then(res => res.json())
        .then(data => setProducts(data))
    }, [])
    return (
        <div>
            <Navigation/>
                <div style={listingbg}>
                    <Typography variant="h4" gutterBottom component="div" style={{textAlign: 'center', paddingTop: '30px'}}>
                        CAR LIST
                    </Typography>
                    <NavLink style={{ textDecoration: 'none'}} to="/home">
                    <Button color="inherit">Home</Button>
                    </NavLink>
                </div>

            <Container style={{paddingTop: '30px'}}>
                <Typography variant="subtitle1" gutterBottom component="div" style={{textAlign: 'center'}}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                    blanditiis tenetur
                </Typography>
                {cartSuccess && <Alert severity="success">Add to Cart successfully!</Alert>}
                <Grid container spacing={2} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {
                        products.map(product => <CarDitails
                            key={product.id}
                            product ={product}
                            setCartSuccess={setCartSuccess}
                        ></CarDitails>)
                    }
                </Grid>
            </Container>
            <Footer/>
        </div>
    );
};

export default CarListing;