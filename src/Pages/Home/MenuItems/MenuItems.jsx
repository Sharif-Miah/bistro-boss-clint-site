import React, { useEffect, useState } from 'react';
import TitleSheard from '../../../Component/TitleSheard';
import SingleMenu from './SingleMenu';

const MenuItems = () => {

    const [menu, setMenu] = useState([])

    useEffect( ()=> {
        fetch('menu.json')
        .then(res => res.json())
        .then(data => {
            const filterMenu = data.filter(item => item.category === 'popular')
            setMenu(filterMenu)
        })
    },[])

    return (
        <section className='mb-16'>
            <TitleSheard 
            subHeading='---Check it out---'
            heading='FROM OUR MENU'
            />

            <div className='grid  md:grid-cols-2 gap-6'>
                {
                    menu.map(item => <SingleMenu
                    key={item._id}
                    item={item}

                    />)
                }
            </div>
        </section>
    );
};

export default MenuItems;