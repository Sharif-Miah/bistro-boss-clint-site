import { useEffect, useState } from 'react';

const UseMenu = () => {

    const [menu, setMenu] = useState([])
    const [loading, setLoading] = useState(true)

    // TODO: Use ment data not show. show data in our shop

    useEffect( ()=> {
        fetch('http://localhost:5000/menu')
        .then(res => res.json())
        .then(data => {
            setLoading(false)
            setMenu(data)
        })
    },[])

    return [menu, loading]
};

export default UseMenu;