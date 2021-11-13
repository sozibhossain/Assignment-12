import { Alert, Button, TextField } from '@mui/material';
import React, { useState } from 'react';
import useAuth from '../../../../Hooks/useAuth';

const MakeAdmin = () => {
    const [email, setEmail] = useState('');
    const [success, setSuccess] = useState(false);
    const {token} = useAuth();



    const handleOnBlur = e => {
        setEmail(e.target.value);
    }
    const handleAdminSubmit = e => {
        const user ={email};

        fetch('http://localhost:5000/users/admin', {
            method: 'PUT',
            headers: {
                'authorization': `Bearer ${token}`,
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data => {
            if(data.modifiedCount){
                setSuccess(true);
                console.log(data);
            }
            
        })


        e.preventDefault(user)
    }
    return (
        <div>
            <h4>admin</h4>
            <form onSubmit={handleAdminSubmit}>
            <TextField 
            sx={{width: '50%'}}
            label="Email"
            type="email"
            onBlur={handleOnBlur} 
            variant="standard" />
            <Button type="submit" variant="contained">Maje Admin</Button>

            </form>
            {success && <Alert severity="success">Make Admin successfully!</Alert>}
        </div>
    );
};

export default MakeAdmin;