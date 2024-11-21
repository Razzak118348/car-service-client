
import { useLoaderData, useParams } from 'react-router-dom';

const ServiceDetails = () => {
    const services = useLoaderData()
    const {id} = useParams()

    // console.log(services,id)
    const choosService = services.find((service)=> service._id === id)
    console.log(choosService)

    return (
        <div>

        </div>
    );
};

export default ServiceDetails;