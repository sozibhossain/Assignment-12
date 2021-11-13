import React, { useState } from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { Button} from '@mui/material';
import useAuth from '../../Hooks/useAuth';

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

const AddToCart = ({openCart, handleCartClose, product, setCartSuccess}) => {
    const {name, price, picture} = product;
    const {user} = useAuth();

    const initialInfo = {castumerName: user.displayName, email: user.email, phone: ''}

    const [cartInfo, setCartInfo] = useState({initialInfo});

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const  newInfo = {...cartInfo};
        newInfo[field] = value;
        setCartInfo(newInfo);
    }

    const handleCartSubmit = e => {
        
        // collect data
        const appointment = {
          ...cartInfo,
          serviceName: name,
          price,
          picture,
        }

        // send to the server
        fetch('http://localhost:5000/featuredcar', {
            method: 'POST',
            headers: {
              'content-type': 'application/json'
            },
            body: JSON.stringify(appointment)
        })
        .then(res => res.json())
        .then(data => {
          if(data.insertedId){
            setCartSuccess(true);
            handleCartClose();
          }
        });


        handleCartClose();
        e.preventDefault();
        
    }
    
    return (
        <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={openCart}
        onClose={handleCartClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={openCart}>
          <Box sx={style}>
            <img src={picture} alt="" style={{width: '370px'}}/>
            <Typography id="transition-modal-title" variant="h6" component="h2">
              {name}
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
                    name="phone"
                    onBlur={handleOnBlur}
                    defaultValue= "Your Phone Number"
                    size="small"
                />
                <TextField
                    disabled
                    sx={{width: '90%', m: 1}}
                    id="outlined-size-small"
                    defaultValue= {price}
                    size="small"
                />
                <Button  type="submit" variant="contained">Add to Cart</Button>
            </form>
          </Box>
        </Fade>
      </Modal>
    );
};

export default AddToCart;




