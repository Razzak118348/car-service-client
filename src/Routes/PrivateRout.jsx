import { Navigate, useLocation } from "react-router-dom";

import PropTypes from 'prop-types';
import Hook from "../Hook/Hook";

const PrivetRout = ({ children }) => {
    // console.log(children)
    const { user, loading } = Hook()
    const location = useLocation();
    // console.log(location.pathname)
    // console.log(loading)
    if (loading) {
        return <div className="flex w-52 flex-col gap-4">
            <div className="skeleton h-32 w-full"></div>
            <div className="skeleton h-4 w-28"></div>
            <div className="skeleton h-4 w-full"></div>
            <div className="skeleton h-4 w-full"></div>
        </div>
    }
    if (user) {
        return children;
    }
    else return <Navigate state={location.pathname} to={'/login'}></Navigate>
};
PrivetRout.protoType = {
    children: PropTypes.element,
}
export default PrivetRout;