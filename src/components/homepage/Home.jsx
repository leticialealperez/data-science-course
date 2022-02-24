import React from 'react';
import './Home.css';

const Home = ({ imageSrc }) => {
    return (
        <div className='home'>
            <img src={imageSrc} alt="data-science-bg" className='home_image' />
            <h1 className='home_title'>The best course.</h1>
        </div>
    );
};

export default Home;