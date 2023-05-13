
const BookingRow = ({ booking,handleDelete,handleBookingApprove}) => {
  const {_id, date, service, price, img ,status} = booking;

  return (
    <tr>
      <th>
        <button onClick={()=>handleDelete(_id)} className="btn btn-md btn-circle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </th>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="mask mask-squircle w-24 h-24">
              {img && <img src={img} alt="Avatar Tailwind CSS Component" />}
            </div>
          </div>
        </div>
      </td>
      <td>
        <div>
          <div className="font-bold">{service}</div>
        </div>
      </td>
      <td>{date}</td>
      <td>${price}</td>
      <th>
      {
        status === 'confirm'?<span className="text-green-500 ">Approved</span>:<button onClick={()=>handleBookingApprove(_id)} className="bg-orange-600 px-4 py-2 rounded-md mr-5 text-white font-semibold">
        Approve
      </button>
      }
      </th>
    </tr>
  );
};

export default BookingRow;
