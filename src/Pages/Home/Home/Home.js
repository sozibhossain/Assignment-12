import React from 'react';
import FeaturedCar from '../../FeaturedCar/FeaturedCar';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';
import Banner from '../Banner/Banner';
import LatetsOffer from '../LatetsOffer/LatetsOffer';
import OrderReview from '../OrderReview/OrderReview';

const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Banner></Banner>
            <FeaturedCar/>
            <LatetsOffer></LatetsOffer>
            <OrderReview/>
            <Footer></Footer>
        </div>
    );
};

export default Home;