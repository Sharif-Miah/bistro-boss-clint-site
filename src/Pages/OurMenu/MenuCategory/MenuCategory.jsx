import React from "react";
import SingleMenu from "../../Home/MenuItems/SingleMenu";
import Cover from "../Cover/Cover";
import { Link } from "react-router-dom";

const MenuCategory = ({ items, img, title }) => {
  
  return (
    <div>
      <div className="my-20">{title && <Cover img={img} title={title} />}</div>
      <div className="grid  md:grid-cols-2 gap-6">
        {items.map((item) => (
          <SingleMenu key={item._id} item={item} />
        ))}
      </div>
      <div className="text-center">
      <Link to={`/OurShop/${title}`}>
      <button className="btn uppercase bg-opacity-0 hover:bg-opacity-0 border-b-black hover:border-b-black text-black mt-9  border-0 border-b-4">ORDER YOUR FAVOURITE FOOD</button>
      </Link>
      </div>

    </div>
  );
};

export default MenuCategory;
