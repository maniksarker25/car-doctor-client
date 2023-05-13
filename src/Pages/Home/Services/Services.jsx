import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";


const Services = () => {
    const [services,setServices] = useState([]);
    useEffect(()=>{
        fetch("http://localhost:5000/services")
        .then(res=>res.json())
        .then(data=>setServices(data))
    },[])
    return (
        <div>
            <h3 className="text-3xl text-red-500 text-center">Service</h3>
            <h2 className="text-5xl text-bold text-center mb-4">Our Service Area</h2>
            <p className="text-center">the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which don not look even slightly believable. </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-12 gap-4">
               {
                services.map(service=><ServiceCard key={service._id} service={service}></ServiceCard>)
               }
            </div>
        </div>
    );
};

export default Services;