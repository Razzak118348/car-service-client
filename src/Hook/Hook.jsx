import React, { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';

const Hook = () => {
    const all = useContext(AuthContext)
    return all;
}
export default Hook;