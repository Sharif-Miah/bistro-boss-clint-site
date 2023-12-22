import { useContext } from 'react';
import { useQuery } from 'react-query'
import { AuthContext } from '../Provider/AuthPorvider';
const UseCart = email => {
    const {user} = useContext(AuthContext)

    const { isLoading, refetch, data: cart = [] } = useQuery({
        queryKey: ['carts', user?.email], 
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/carts?email=${user?.email}`)
            return res.json()
        }
        
})
return [cart, refetch ]
}

export default UseCart;