import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { authContext } from "../../Providers/AuthProvider";
import Swal from 'sweetalert2'

const CheckOut = () => {
  const service = useLoaderData();
  const {_id,price,title,img} = service;
  const {user} = useContext(authContext)

  const handleCheckOut = event =>{
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const date = form.date.value;
    const email = form.email.value;
    const phone = form.phone.value;
    const message = form.message.value;
    const booking =  {
      costumerName:name,
      email,
      date,
      phone,
      img,
      message,
      serviceId:_id,
      service:title,
      price:price
    }
    console.log(booking)

    fetch('http://localhost:5000/bookings',{
      method:'POST',
      headers:{'content-type':'application/json'},
      body:JSON.stringify(booking)

    })
    .then(res=>res.json())
    .then(data=>{
      if(data.insertedId){
        Swal.fire({
          title: 'Success!',
          text: 'Booking Successfully',
          icon: 'success',
          confirmButtonText: 'Okey'
        })
        form.reset();
      }
    })


  }
  return (
    <div>
      <h3 className="text-3xl text-center font-bold">
        Booking Service:{title}
      </h3>
      <div className="lg:w-2/3 mx-auto bg-base-200 p-16 mt-20">
        <form onSubmit={handleCheckOut}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                defaultValue={user?.displayName}
                placeholder="Name"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Date</span>
              </label>
              <input
                type="date"
                name="date"
                placeholder=""
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Phone</span>
              </label>
              <input
                type="number"
                name="phone"
                placeholder="Phone"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="Email"
                defaultValue={user?.email}
                name="email"
                className="input input-bordered"
              />
            </div>
            <textarea  className="w-[720px] h-[250px] p-8" name="message" placeholder="Your Message" id="" cols="30" rows="10"></textarea>
          </div>
          <input
            className="bg-orange-600 mt-10 px-4 w-full py-2 rounded-md mr-5 text-white font-semibold"
            type="submit"
            value="Order Confirm"
          />
        </form>
      </div>
    </div>
  );
};

export default CheckOut;
