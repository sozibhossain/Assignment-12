import { Grid } from '@mui/material';
import React from 'react';
import Orders from '../../Orders/Orders';

const DashboardOrders = () => {
    return (
        <Grid container spacing={2}>
                <Orders></Orders>
        </Grid>
    );
};

export default DashboardOrders;