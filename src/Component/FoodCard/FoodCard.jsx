import React from "react";

const FoodCard = ({ item }) => {
const { name, image, price, recipe } = item;
  return (
    <div className="card w-96 bg-base-100 shadow-xl mt-10">
      <figure>
        <img
          src={image}
          alt="Shoes"
        />
      </figure>
      <p className=" absolute  right-0 mr-6 mt-3 px-3 rounded-lg bg-slate-900 text-white">${price}</p>
      <div className="card-body mx-auto">
        <h2 className="card-title text-center">{name}</h2>
        <p>{recipe}</p>
        <div className="card-actions justify-center">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
