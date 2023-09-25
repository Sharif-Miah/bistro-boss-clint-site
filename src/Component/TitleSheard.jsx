import React from 'react';

const TitleSheard = ({subHeading, heading}) => {
    return (
        <div className='md:w-4/12 mx-auto text-center mb-16'>
            <p className='text-yellow-600 mb-4'>{subHeading}</p>
            <h3 className='text-3xl font-bold border-y-4 py-4'>{heading}</h3>
        </div>
    );
};

export default TitleSheard;