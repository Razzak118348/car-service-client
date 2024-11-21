import { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const Service = () => {
const [services,setServices] = useState([])

useEffect(()=>{
    fetch('http://localhost:3000/services')
    .then(res=>res.json())
    .then(data=>setServices(data))
},[])

    return (
        <div className="my-20">
<div className="flex justify-center items-center ">
<div className="space-y-3 w-1/2" >
    <h3 className="text-xl text-orange-400 text-center">Service</h3>
    <h2 className="text-3xl font-bold text-center">Our service</h2>
    <p>The majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
    {
services.map(service=>(<div key={service._id} className="card bg-base-100 w-96 shadow-xl">
    <figure className="px-10 pt-10">
      <img
        src={service.img}
        alt="Shoes"
        className="rounded-xl" />
    </figure>
    <div className="card-body ">
      <h2 className="card-title">{service.title}</h2>
   <div className="flex justify-between">
    <p className="lg:text-lg font-bold text-orange-400">Price : ${service.price}</p>
<Link to={`/checkout/${service._id}`}>
<FaArrowRight className="text-orange-400"></FaArrowRight>

</Link>
   </div>

    </div>
  </div>))
}
</div>

        </div>
    );
};

export default Service;