import { useContext, useEffect, useState } from "react";
import { authContext } from "../../Providers/AuthProvider";
import BookingRow from "./BookingRow";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const Bookings = () => {
  const { user } = useContext(authContext);
  const [bookings, setBookings] = useState([]);
  const navigate = useNavigate();
  const url = `http://localhost:5000/bookings?email=${user?.email}`;
  useEffect(() => {
    fetch(url,{
      method:"GET",
      headers:{
        authorization:`Bearer ${localStorage.getItem('car-access-token')}`
      }
    })
      .then((res) => res.json())
      .then((data) => {
        if(!data.error){

          setBookings(data)
        }
        else{
          navigate('/');
        }
      });
  }, [url,navigate]);
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/bookings/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Service has been deleted.", "success");
              const remainingBookings = bookings.filter(booking=>booking._id !== id);
              setBookings(remainingBookings)
            }
          });
      }
    });
  };
  const handleBookingApprove = id =>{
    fetch(`http://localhost:5000/bookings/${id}`,{
      method:'PATCH',
      headers:{'content-type':'application/json'},
      body:JSON.stringify({status:'confirm'})
    })
    .then(res=>res.json())
    .then(data=> {
      console.log(data)
      if(data.modifiedCount > 0){
        //update status
        const pendingBookings= bookings.filter(booking=> booking._id !== id);
        const approvedBooking = bookings.find(booking=>booking._id === id);
        approvedBooking.status = 'confirm';
        const newBookings = [approvedBooking,...pendingBookings];
        setBookings(newBookings)

      }
    })
  }
  return (
    <div>
      <h2 className="text-4xl">Your bookings:{bookings.length}</h2>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <th>Service Image</th>
              <th>Service Name</th>
              <th>Date</th>
              <th>Price</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((booking) => (
              <BookingRow key={booking._id} handleBookingApprove={handleBookingApprove} handleDelete={handleDelete} booking={booking}></BookingRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Bookings;
