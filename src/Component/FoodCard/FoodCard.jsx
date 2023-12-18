import React from "react";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthPorvider";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import UseCart from "../../Hooks/UseCart";

const FoodCard = ({ item }) => {

const { name, image, price, recipe, _id } = item;
const {user} = useContext(AuthContext);
const [cart, refetch] = UseCart();
const navigate = useNavigate();
const location = useLocation()

const handleAddToCart = (item) => {
 
 const OrderItem = {menuItemId: _id, name, image, price, email: user.email}
 console.log(OrderItem);
 
 if(user && user.email){
  fetch('http://localhost:5000/carts',{
    method: 'POST',
    headers: {
      'content-type' : 'application/json'
    },
    body : JSON.stringify(OrderItem)
  })
  .then(res => res.json())
  .then(data => {
    if(data.insertedId){
      refetch() // refetch data in show navbar
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Food Added on the Cart.",
        showConfirmButton: false,
        timer: 1500
      });
    }
  })
 }
 else{
  Swal.fire({
    title: "Please login to Order the Food?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Login Now!"
  }).then((result) => {
    if (result.isConfirmed) {
      navigate("/login", {state: {from: location}})
    }
  });
 }
}

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
          <button onClick={() => handleAddToCart(item)} className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
