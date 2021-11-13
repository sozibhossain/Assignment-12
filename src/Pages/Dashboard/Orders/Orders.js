import React, { useEffect, useState } from 'react';
import useAuth from '../../../Hooks/useAuth';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button } from '@mui/material';

const Orders = () => {
    const {user} = useAuth();
    const [orders, setOrders] = useState([]);


    useEffect(() => {
        const url = `http://localhost:5000/featuredcar?email=${user.email}`
        fetch(url)
        .then(res => res.json())
        .then(data => setOrders(data))
    }, [])

    const handleDelete = id => {
        const url = `http://localhost:5000/featuredcar/${id}`;
        fetch(url, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.deletedCount){
                alert('deleted')
                const remaining = orders.filter(product => product._id !==id)
                setOrders(remaining)
            }
        })
    }
    return (
        <div>
            <h4>Totale Orders: {orders.length}</h4>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="Oders table">
                    <TableHead>
                    <TableRow>
                        <TableCell>ProductName</TableCell>
                        <TableCell align="left">UserName</TableCell>
                        <TableCell align="left">Email</TableCell>
                        <TableCell align="left">Phpne Number</TableCell>
                        <TableCell align="left">Price</TableCell>
                        <TableCell align="left">Dalate</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {orders.map((row) => (
                        <TableRow
                        key={row._id}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                        <TableCell component="th" scope="row">
                            {row.serviceName}
                        </TableCell>
                        <TableCell align="left">{row.initialInfo.castumerName}</TableCell>
                        <TableCell align="left">{row.email}</TableCell>
                        <TableCell align="left">{row.phone}</TableCell>
                        <TableCell align="left">{row.price}</TableCell>
                        <Button onClick={() => handleDelete(row._id)}>X</Button>
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
};

export default Orders;