import React from "react";
import UseCart from "../../Hooks/UseCart";
import TitleSheard from "../../Component/TitleSheard";

const MyCart = () => {
  const [cart] = UseCart();
  const total = cart.reduce((item, sum) => {
    return (parseFloat(sum.price) + parseFloat(item)).toFixed(2);
  }, 0);
  console.log(cart);
  return (
    <div>
      <TitleSheard subHeading="My cart" heading="WANNA ADD MORE?" />

      <div className="w-full flex justify-between items-center">
        <h1 className="uppercase text-2xl font-semibold">
          Total Order: {cart.length}
        </h1>
        <h1 className="uppercase text-2xl font-semibold mx-28">
          Total price: {total}
        </h1>
        <button className="btn btn-warning btn-sm uppercase font-bold">
          pay
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>
                <label>#</label>
              </th>
              <th>Item Image</th>
              <th>Item Name</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item, index) => (
              <tr key={item._id}>
                <td>
                  <label>{index + 1}</label>
                </td>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={item.image}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                  </div>
                </td>
                <td>{item.name}</td>
                <td>$ {item.price}</td>
                <td>
                  <button className="btn btn-ghost btn-xs">details</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyCart;
