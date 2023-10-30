import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

const Home = () => {
  const sixCategoryLoader = useLoaderData();
  return (
    <div>
      <h1>Home {sixCategoryLoader.length}</h1>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 500,
          stretch: 540,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        className="mySwiper"
      >
        {sixCategoryLoader.map((sixCategory, index) => (
          <SwiperSlide key={index}>
            <div className="relative">
              <div className="absolute z-[1000] text-white text-3xl"></div>
              <div className="absolute bg-black bg-opacity-75 inset-0 "></div>

              <div>
                <img src={sixCategory.image} className="object-cover w-full" />
              </div>
              <div className="flex justify-center items-center">
                <div className="absolute bottom-80 text-white space-y-4 w-2/3 text-center">
                  <div className="font-bold text-5xl ">{sixCategory.name}</div>
                  <div className="">{sixCategory.description}</div>
                  <Link to={`/booking/${sixCategory.name}`}>
                    <button className="border px-3 py-2 uppercase rounded-sm mt-5">
                      Book Now
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Home;
