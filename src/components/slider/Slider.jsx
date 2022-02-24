import React from 'react';
import './Slider.css';

import { useInView } from 'react-intersection-observer';


const Slider = ({imageSrc, title, subtitle, flipped}) => {
    const { ref, inView } = useInView({
        /*Optional options*/
        threshold: 0.4, //antes de acionar
    });
    
    
    const renderContent = () => {
        if(!flipped){
            return (
                <>
                    <div className='slider_content'>
                        <h1 className='slider_title'>{title}</h1>
                        <p>{subtitle}</p>
                    </div>
                    <img src={imageSrc} alt="specifications-title" className='slider_image' />
                </>
            )
        }else{
            return (
                <>
                    <img src={imageSrc} alt="specifications-details" className='slider_image' />
                    <div className='slider_content'>
                        <h1 className='slider_title'>{title}</h1>
                        <p>{subtitle}</p>
                    </div>
                </>
            )
        }
    };
    
    
    
    return (
        <div className={inView ? "slider slider--zoom": "slider"} ref={ref}>
            {renderContent()}
        </div>
    );
};

export default Slider;