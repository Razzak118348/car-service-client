import axios from "axios";
import { useEffect } from "react";
import Hook from "./Hook";
import { useNavigate } from "react-router-dom";

const axiosSecure = axios.create({
    baseURL: 'https://car-service-server-theta.vercel.app',
    withCredentials: true
});

const useAxiosSecure = () => {
    const navigate = useNavigate()
    const { LogOut } = Hook()
    useEffect(() => {
        axiosSecure.interceptors.response.use(
            (response) => {
                return response;
            },
            (error) => {
                if (error.response.status === 401 || error.response.status === 403) {
                    console.log('LogOut')
                    LogOut()
                        .then(() => {
                            navigate('/login')
                        })
                        .catch((error)=>{console.log(error)});
                    }
                }
    );
    }, [LogOut, navigate]);
    return axiosSecure;
};

export default useAxiosSecure;