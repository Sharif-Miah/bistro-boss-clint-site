import React from 'react';
import FoodCard from '../../../Component/FoodCard/FoodCard';

const OrderTap = ({item}) => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-3 gap-10'>
            {
                item.map(item => <FoodCard key={item._id} item={item}/>)
            }
        </div>
    );
};

export default OrderTap;