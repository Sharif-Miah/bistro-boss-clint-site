import React from "react";

const SingleMenu = ({ item }) => {
  const { name, image, price, recipe } = item;

  
  return (
    <div className="flex ">
      <img style={{borderRadius: '0 200px 200px 200px'}} className="w-[100px]" src={image} alt="" />
      <div className="ml-4">
        <h4 className="text-xl">{name}</h4>
        <p>{recipe}</p>
      </div>
      <p className="text-yellow-500">{price}</p>
    </div>
  );
};

export default SingleMenu;
