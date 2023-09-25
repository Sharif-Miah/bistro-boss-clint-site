import React from "react";
import serviceImg from '../../../assets/home/chef-service.jpg'

const BistroDitails = () => {
  return (
    <div  className=" relative w-full mb-16">
    <img src={serviceImg} className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-1/4 right-1/4 top-1/2">
      <div className="bg-white w-[700px] text-center px-16 py-12">
        <h3 className="text-3xl mb-5 uppercase">Bistro Boss</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero accusamus laborum deserunt ratione dolor officiis praesentium! Deserunt magni aperiam dolor eius dolore at, nihil iusto ducimus incidunt quibusdam nemo.</p>
      </div>
    </div>
  </div>
  );
};

export default BistroDitails;
