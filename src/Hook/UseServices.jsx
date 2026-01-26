import { useEffect, useState } from 'react';
import { axiosSecure } from './useAxiosSecure';

const UseServices = (asc) => {
    const [services, setServices] = useState([]);

    useEffect(() => {
axiosSecure(`/services?sort=${asc ? 'asc' : 'dsc'}`)
    .then(res => {
        setServices(res.data);
    })
    .catch(err => console.log(err));

    }, [asc])
    return services;
};

export default UseServices;