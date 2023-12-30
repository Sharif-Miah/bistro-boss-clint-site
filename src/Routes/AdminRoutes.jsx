import { Navigate, useLocation } from 'react-router-dom';
import { FadeLoader } from 'react-spinners';
import useAdmin from '../Hooks/useAdmin';
import useAuth from '../Hooks/useAuth';

const AdminRoutes = () => {
    const {user, loading} = useAuth();
    const location = useLocation();
    const [isAdmin, isAdminLoading] = useAdmin();

    if(loading || isAdminLoading){
        return <FadeLoader color="#36d7b7" />
    }

    if(user && isAdmin){
        return children;
    }

    return <Navigate to="/login" state={{from: location}} replace></Navigate>
};

export default AdminRoutes;