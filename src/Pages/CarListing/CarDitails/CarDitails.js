import { Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import React from 'react';
import AddToCart from '../../AddToCart/AddToCart';

const CarDitails = (props) => {
    const {name, price, picture} = props.product;

    // open Cart Booking
    const [openCart, setOpenCart] = React.useState(false);
    const handleCartOpen = () => setOpenCart(true);
    const handleCartClose = () => setOpenCart(false);

    return (
        <>
            <Grid item xs={12} sm={6} md={4}>
                <Card  sx={{ maxWidth: 400, height: '400px' }} >
                    <CardMedia
                        component="img"
                        height="250"
                        image={picture}
                        alt="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {price}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button onClick={handleCartOpen} size="small">Learn More</Button>
                    </CardActions>
                </Card>
            </Grid>
            <AddToCart
                product={props.product}
                openCart={openCart}
                handleCartClose={handleCartClose}
            ></AddToCart>
        </>
    );
};

export default CarDitails;