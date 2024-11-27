import { useLoaderData } from 'react-router-dom';

const ServiceDetails = () => {
    const service = useLoaderData();

    return (
        <div className="max-w-4xl my-10 mx-auto p-6 bg-white shadow-lg rounded-lg">
            {/* Header Section */}
            <div className="text-center">
                <h1 className="text-4xl font-bold text-gray-800 mb-4">{service.title}</h1>
                <h3 className="text-xl font-semibold text-teal-600">Price: <span className="text-green-600">${service.price}</span></h3>
            </div>

            {/* Image Section */}
            <div className="mt-6 mb-4 flex justify-center">
                <img
                    src={service.img}
                    alt={service.title}
                    className="rounded-lg shadow-xl w-80 h-80 object-cover"
                />
            </div>

            {/* Description Section */}
            <p className="text-gray-700 text-lg leading-relaxed mb-6">{service.description}</p>

            {/* Facilities Section */}
            <div>
                <h2 className="text-2xl font-semibold text-gray-800 mb-6">Facilities</h2>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {service.facility.map((facility, index) => (
                        <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                            <h3 className="text-xl font-semibold text-gray-800 mb-3">{facility.name}</h3>
                            <p className="text-gray-600 text-sm">{facility.details}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ServiceDetails;
