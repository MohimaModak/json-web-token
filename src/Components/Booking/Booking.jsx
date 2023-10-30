import React, { useContext, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";
import "./Booking.css";
import { AuthContext } from "../AuthProvider/AuthProvider";
import axios from "axios";

const Booking = () => {
  const booking = useLoaderData();
  console.log(booking);
  const { user } = useContext(AuthContext);

  const [formVisibility, setFormVisibility] = useState(false);

  const toggleForm = () => {
    setFormVisibility(!formVisibility);
  };

  const handleData = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const date = e.target.date.value;
    const amount = e.target.amount.value;
    const image = e.target.image.value;
    const formData = {email, name, date, amount, image };
    console.log(formData);

    axios.post("http://localhost:5000/booking", formData).then((data) => {
      console.log(data.data);
    });
  };

  return (
    <div>
      <div className="video-container relative">
        {/* <div className="absolute bg-black bg-opacity-65 inset-0 "></div> */}

        <div>
          <video autoPlay loop muted playsInline className="video">
            <source
              src="/src/assets/Gallery/Waves from Above 4.mp4"
              className="video"
            />
          </video>
          <div className="overlay"></div>
        </div>

        <div className="flex justify-center items-center text-center">
          <div className="absolute top-36 text-white z-[1000]">
            {formVisibility ? (
              <div className="text-center text-4xl font-bold">Book Now</div>
            ) : (
              <div>
                <h1 className="text-center text-6xl font-bold mb-5">
                  {booking.name}
                </h1>
                <div className="">
                  <div className="flex justify-center items-center">
                    <h1 className="text-base w-2/3">{booking.description}</h1>
                  </div>
                  <h1 className="text-sm">{booking.title}</h1>
                </div>
              </div>
            )}

            {formVisibility ? (
              <button
                onClick={toggleForm}
                className="opacity background border px-2 py-1 mt-5 rounded-md"
              >
                <AiOutlineClose></AiOutlineClose>
              </button>
            ) : (
              <button
                onClick={toggleForm}
                className="opacity background border px-2 py-1 mt-5 rounded-md"
              >
                Book
              </button>
            )}

            {formVisibility && (
              <div>
                <div className="form p-5 m-5 rounded-md background">
                  <form onSubmit={handleData}>
                    <input
                      type="text"
                      placeholder="name"
                      name="name"
                      defaultValue={booking.name}
                      className="background border px-1 py-1 rounded-md w-full max-w-xs "
                    />
                    <br />
                    <input
                      type="text"
                      placeholder="image"
                      name="image"
                      defaultValue={booking.image}
                      className="background border px-1 py-1 rounded-md w-full max-w-xs mt-5"
                    />
                    <br />
                    <input
                      type="text"
                      placeholder="email"
                      defaultValue={user?.email}
                      name="email"
                      className="background border  px-1 py-1 rounded-md w-full max-w-xs  mt-5"
                    />
                    <br />
                    <input
                      type="date"
                      placeholder="date"
                      name="date"
                      className="background border  px-1 py-1 rounded-md w-full max-w-xs  mt-5"
                    />
                    <input
                      type="amount"
                      placeholder="amount"
                      name="amount"
                      className="background border  px-1 py-1 rounded-md w-full max-w-xs  mt-5"
                    />

                    <br />
                    <button className="background px-1 py-1 rounded-md border mt-3">
                      Submit
                    </button>
                  </form>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;
