import { useContext } from 'react';
import { useQuery } from 'react-query'
import { AuthContext } from '../Provider/AuthPorvider';
import useAxiosSecure from './useAxiousSecure';
const UseCart = email => {
    const {user} = useContext(AuthContext)
    const token = localStorage.getItem('access-token')
    const [axiosSecure] = useAxiosSecure();


    const { isLoading, refetch, data: cart = [] } = useQuery({
        queryKey: ['carts', user?.email], 
        

        // queryFn: async () => {
        //     const res = await fetch(`http://localhost:5000/carts?email=${user?.email}`, {
        //         headers: {
        //             authorization: `bearer${token}`
        //         }
        //     })
        //     return res.json()
        // }

        queryFn: async () => {
            const res = await axiosSecure(`carts?email=${user?.email}`)
            console.log('res from', res);
            return res.data;
        }
        
})
return [cart, refetch ]
}

export default UseCart;