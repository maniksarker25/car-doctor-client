import { useContext } from "react";
import { authContext } from "../Providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import LoadingSpiner from "../Pages/LoadingSpinner/LoadSpinner";


const PrivateRoute = ({children}) => {
    const {user,loading} = useContext(authContext);
    const location = useLocation();
    if(loading){
       return <LoadingSpiner></LoadingSpiner>
    }
    if(user){
        return children;
    }
   return <Navigate to='/login' state={{from:location}} replace></Navigate>
};

export default PrivateRoute;