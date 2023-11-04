import React, { useEffect, useState } from 'react';
import TitleSheard from '../../../Component/TitleSheard';
import SingleMenu from './SingleMenu';
import UseMenu from '../../../Hooks/UseMenu';

const MenuItems = () => {
    const [menu] = UseMenu()
    const popular = menu.filter(item => item.category === "popular")

    

    return (
        <section className='mb-16'>
            <TitleSheard 
            subHeading='---Check it out---'
            heading='FROM OUR MENU'
            />

            <div className='grid  md:grid-cols-2 gap-6'>
                {
                    popular.map(item => <SingleMenu
                    key={item._id}
                    item={item}

                    />)
                }
            </div>
        </section>
    );
};

export default MenuItems;