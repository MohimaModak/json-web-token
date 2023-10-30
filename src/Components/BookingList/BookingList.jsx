import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { RiDeleteBin6Line } from "react-icons/ri";
import axios from "axios";
import Swal from "sweetalert2"; // Import SweetAlert library

const BookingList = () => {
  const { user } = useContext(AuthContext);
  console.log(user);
  const [bookingList, setBookingList] = useState([]);

  useEffect(() => {
    if (user?.email) {
      const url = `http://localhost:5000/booking?email=${user.email}`;
      axios
        .get(url, { withCredentials: true })
        .then((res) => setBookingList(res.data));
    }
  }, [user?.email]);

  const handleDelete = (id) => {
    console.log("delete all", id);
    axios.delete(`http://localhost:5000/booking/${id}`).then((data) => {
      console.log(data);
      Swal.fire("Deleted!", "Your booking has been deleted.", "success"); // Set the success alert using Swal.fire
    });
  };

  return (
    <div className="bg-gray-100 p-5">
      {/* <h1>{bookingList.length}</h1> */}
      <div className="lg:grid grid-cols-2 gap-5 ">
        {bookingList.map((bookeduser) => (
          <div key={bookeduser._id}>
            <div className="border bg-white mt-4">
              <div className="flex justify-center items-center text-left gap-4 ">
                <div>
                  <img src={bookeduser.image} alt="service" />
                </div>
                <div className="w-2/3">
                  <h1 className="font-bold text-2xl">{bookeduser.name}</h1>
                  <h1 className="">{bookeduser.description}</h1>
                  <h1 className="font-bold">Customer: {user.email}</h1>
                  <h1 className="font-semibold text-sm">
                    Date: {bookeduser.date}
                  </h1>
                  <h1 className="font-semibold text-sm">
                    $ {bookeduser.amount}
                  </h1>
                  <button
                    onClick={() => handleDelete(bookeduser._id)}
                    className="text-lg"
                  >
                    <RiDeleteBin6Line></RiDeleteBin6Line>
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookingList;
