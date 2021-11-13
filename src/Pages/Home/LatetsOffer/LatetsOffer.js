import React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { Container, Typography } from '@mui/material';

function srcset(image, size, rows = 1, cols = 1) {
    return {
      src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
      srcSet: `${image}?w=${size * cols}&h=${
        size * rows
      }&fit=crop&auto=format&dpr=2 2x`,
    };
}

const itemData = [
    {
      img: 'https://storage.googleapis.com/theme-vessel-items/checking-sites/autocar-html/HTML/main/img/latest-offers/img-1.jpg',
      title: 'Hats',
      cols: 2,
    },
    {
      img: 'https://storage.googleapis.com/theme-vessel-items/checking-sites/autocar-html/HTML/main/img/latest-offers/img-4.jpg',
      title: 'Honey',
      author: '@arwinneil',
      rows: 2,
      cols: 2,
    },
    {
      img: 'https://storage.googleapis.com/theme-vessel-items/checking-sites/autocar-html/HTML/main/img/latest-offers/img-2.jpg',
      title: 'Basketball',
    },
    {
      img: 'https://storage.googleapis.com/theme-vessel-items/checking-sites/autocar-html/HTML/main/img/latest-offers/img-3.jpg',
      title: 'Fern',
    }
];

const LatetsOffer = () => {
    return (
        <div style={{paddingTop: '70px'}}>
            <Typography variant="h4" gutterBottom component="div" style={{textAlign: 'center'}}>
                LATEST OFFERS
            </Typography>
            <Typography variant="h6" gutterBottom component="div" style={{textAlign: 'center'}}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
            </Typography>
            <Container>
            <ImageList
                sx={{ width: 1150, height: 200 }}
                variant="quilted"
                cols={4}
                rowHeight={121}
                >
                {itemData.map((item) => (
                    <ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1}>
                    <img
                        {...srcset(item.img, 121, item.rows, item.cols)}
                        alt={item.title}
                        loading="lazy"
                    />
                    </ImageListItem>
                ))}
            </ImageList>
            </Container>
        </div>
    );
};

export default LatetsOffer;