import React, { useEffect, useState } from "react";
import TitleSheard from "../../../Component/TitleSheard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { Rating } from "@smastrom/react-rating";

import "@smastrom/react-rating/style.css";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

const Testimonials = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("reviews.json")
      .then((res) => res.json())
      .then((data) => {
        setReviews(data);
      });
  }, []);

  return (
    <section>
      <TitleSheard
        subHeading="---What Our Clients Say---"
        heading="Testimonials"
      />
      <div>
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
          {reviews.map((review) => (
            <SwiperSlide key={review._id}>
              <div className="flex flex-col items-center mx-24 my-16">
                <div className="text-center">
                <Rating
                  style={{ maxWidth: 180 }}
                  value={review.rating}
                  
                  
                />
                </div>
                <p className="py-8">{review.details}</p>
                <h3 className="text-2xl text-orange-600 ">
                  {review.name}
                </h3>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
