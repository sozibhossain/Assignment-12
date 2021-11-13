import { Button, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import useAuth from '../../../Hooks/useAuth';


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const Review = () => {
    const {user} = useAuth();
    const initialInfo = {castumerName: user.displayName, email: user.email}
    const [cartInfo, setCartInfo] = useState({initialInfo});

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const  newInfo = {...cartInfo};
        newInfo[field] = value;
        setCartInfo(newInfo);
    }

    fetch('http://localhost:5000/review')
        .then(res => res.json())
        .then(data => {
          console.log(data);
        });


    const handleCartSubmit = e => {
        alert('submit')
        e.preventDefault();
        
    }
    
    return (
        <Box sx={style}>
            <Typography id="transition-modal-title" variant="h6" component="h2">
              
            </Typography>
            <form onSubmit={handleCartSubmit}>
                <TextField
                    sx={{width: '90%', m: 1}}
                    id="outlined-size-small"
                    name="castumerName"
                    onBlur={handleOnBlur}
                    defaultValue= {user.displayName}
                    size="small"
                />
                <TextField
                    sx={{width: '90%', m: 1}}
                    id="outlined-size-small"
                    name="email"
                    onBlur={handleOnBlur}
                    defaultValue= {user.email}
                    size="small"
                />
                <TextField
                    sx={{width: '90%', m: 1}}
                    id="outlined-size-small"
                    name="email"
                    onBlur={handleOnBlur}
                    defaultValue= "Your comment"
                    size="small"
                />
                <Button  type="submit" variant="contained">Review</Button>
            </form>
          </Box>
    );
};


export default Review;