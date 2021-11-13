import { Card, CardActions, CardContent, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';

const OrderReview = () => {
    const [reviews, setReviews] = useState({})



    useEffect(() => {
        fetch('http://localhost:5000/review')
        .then(res => res.json())
        .then(data => setReviews(data))
    },[])


    return (
        <div>
            <h3>Order review</h3>
        </div>
    );
};

export default OrderReview;