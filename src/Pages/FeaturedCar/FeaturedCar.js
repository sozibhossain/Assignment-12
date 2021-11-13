import { Alert, Container, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Shop from '../Shop/Shop';




const FeaturedCar = () => {
    const [products, setProducts] = useState([]);
    const [cartSuccess, setCartSuccess] = useState(false);


    useEffect(() => {
        fetch('http://localhost:5000/products')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, [])

    return (

        <Container style={{paddingTop: '30px'}}>
            <Typography variant="h4" gutterBottom component="div" style={{textAlign: 'center', paddingTop: '30px'}}>
                FEATURED CAR
            </Typography>
            <Typography variant="subtitle1" gutterBottom component="div" style={{textAlign: 'center'}}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                blanditiis tenetur
            </Typography>
            {cartSuccess && <Alert severity="success">Add to Cart successfully!</Alert>}
            <Grid container spacing={2} columns={{ xs: 4, sm: 8, md: 12 }}>
                {
                    products.slice(0,6).map(product => <Shop
                        key={product.id}
                        product ={product}
                        setCartSuccess={setCartSuccess}
                    ></Shop>)
                }
            </Grid>
        </Container>
    );
};

export default FeaturedCar;