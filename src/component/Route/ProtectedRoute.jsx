import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import { Route , Navigate } from "react-router-dom"; // place of redirect used navigate

// const ProtectedRoute =({component:Component,...rest})=>{
//     const {loading, isAuthenticated,user}=useSelector((state)=>state.user);
//     return(
//         <Fragment>
//             {!loading && (
//                 <Route
//                 {...rest}
//                 render={(props)=>{
//                     if(!isAuthenticated){
//                         return <Navigate to="/login" />; // place of redirect used navigate
//                     }
//                     return <Component {...props} />;
//                 }}
//                  />
//             )}
//         </Fragment>
//     );
// };

const ProtectedRoute = ({ isAdmin, children }) => {
    const { loading, isAuthenticated, user } = useSelector(state => state.user)

    if (!loading && isAuthenticated === false) {
        return <Navigate to='/login' />
    }

    if (!loading && isAdmin === true && user.role !== 'admin') {
        return <Navigate to='/login' />
    }

    return <Fragment>{loading === false ? children : null}</Fragment>
}

export default ProtectedRoute;
