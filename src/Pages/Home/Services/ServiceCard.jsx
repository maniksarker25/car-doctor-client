import { FaArrowRight } from 'react-icons/fa';
const ServiceCard = ({ service }) => {
  const { title, img, price } = service;
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img src={img} alt="Shoes" className="rounded-xl h-56" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <div className="flex items-center">
          <p className="text-red-500">Price: ${price}</p>
          <FaArrowRight className='text-red-500 cursor-pointer'></FaArrowRight>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
