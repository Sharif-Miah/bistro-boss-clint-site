import React from "react";
import SingleMenu from "../../Home/MenuItems/SingleMenu";
import Cover from "../Cover/Cover";

const MenuCategory = ({ items, img, title }) => {
  
  return (
    <div>
      <div className="my-20">{title && <Cover img={img} title="OUR MENU" />}</div>
      <div className="grid  md:grid-cols-2 gap-6">
        {items.map((item) => (
          <SingleMenu key={item._id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default MenuCategory;
