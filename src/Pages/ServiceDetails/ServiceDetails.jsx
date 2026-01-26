import { Link, useLoaderData } from "react-router-dom";

const ServiceDetails = () => {
    const service = useLoaderData();
    console.log(service);
console.log(service.facility);
    return (
        <div className="max-w-6xl mx-auto px-4 py-10">
            {/* Image Hero Section */}
            <div className="relative">
                <img
                    src={service.img}
                    alt={service.title}
                    className="w-full h-[350px] object-cover rounded-2xl shadow-lg"
                />
                <div className="absolute inset-0 bg-black/50 rounded-2xl flex items-center justify-center">
                    <div className="text-center text-white">
                        <h1 className="text-4xl md:text-5xl font-bold mb-2">
                            {service.title}
                        </h1>
                        <div className="badge badge-success badge-lg text-lg">
                            Price: ${service.price}
                        </div>
                    </div>
                </div>
            </div>

            {/* Content Section */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-10">
                {/* Left Content */}
                <div className="lg:col-span-2">
                    <div className="card bg-base-100 shadow-xl">
                        <div className="card-body">
                            <h2 className="card-title text-2xl">Service Description</h2>
                            <p className="text-gray-600 leading-relaxed">
                                {service.description}
                            </p>

                            <div className="divider">Facilities</div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {service?.facility?.map((item, index) => (
                                    <div
                                        key={index}
                                        className="card bg-base-200 border-l-4 border-red-500 hover:shadow-lg transition"
                                    >
                                        <div className="card-body p-5">
                                            <h3 className="font-bold text-lg">{item.name}</h3>
                                            <p className="text-sm text-gray-600">{item.details}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Side Booking Card */}
                <div>
                    <div className="card bg-base-100 shadow-xl sticky top-5">
                        <div className="card-body">
                            <h2 className="card-title">Service Checkout</h2>

                            <div className="flex justify-between text-lg font-semibold">
                                <span>Service:</span>
                                <span>{service.title}</span>
                            </div>

                            <div className="flex justify-between text-lg font-semibold">
                                <span>Price:</span>
                                <span className="text-green-600">${service.price}</span>
                            </div>

                            <div className="divider"></div>

                             <Link to={`/checkout/${service._id}`}> <button className="btn btn-error btn-block text-white">
                            Book Now
                            </button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetails;
