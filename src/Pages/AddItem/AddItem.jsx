import React from "react";
import { Helmet } from "react-helmet-async";
import TitleSheard from "../../Component/TitleSheard";
import { useForm } from "react-hook-form";
import { FaUtensils } from "react-icons/fa6";

const AddItem = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="w-full">
      <Helmet>
        <title>Bistro Boss || Add Item</title>
      </Helmet>
      <TitleSheard subHeading="What's new?" heading="Add an Item" />

      <div className="ml-3">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label className="font-semibold ml-3"> Recipe Name*</label> <br />
            <input
              type="text"
              {...register("recipe", { required: true })}
              placeholder="Recipe Name"
              className="input input-bordered input-md w-full  mt-3"
            />
          </div>

          <div className="flex my-5">
            <div className="w-1/2 mr-2">
              <label className="font-semibold ml-3">Category*</label> <br />
              <select
                {...register("category", { required: true })}
                className="input input-bordered input-md cursor-pointer w-full  mt-3"
              >
                <option value="select">Select...</option>
                <option value="salad">Salad</option>
                <option value="pizza">Pizza</option>
                <option value="soup">Soup</option>
                <option value="dessert">Dessert</option>
                <option value="drinks">Drinks</option>
                <option value="others">Others</option>
              </select>
            </div>
            <div className="w-1/2 ml-2">
              <label className="font-semibold ml-3">Price*</label> <br />
              <input
                type="number"
                {...register("price", { required: true })}
                placeholder="Your Name"
                className="input input-bordered input-md w-full  mt-3"
              />
            </div>
          </div>

          <div>
            <label className="font-semibold ml-3 ">Recipe Details*</label>{" "}
            <br />
            <textarea
              type="text"
              {...register("details", { required: true })}
              placeholder="Recipe Details"
              className="textarea textarea-bordered textarea-lg mt-3 w-full"
            ></textarea>
          </div>

          <div className="my-4">
            <input type="file" className="file-input w-full max-w-xs" />
          </div>

          <button
            type="submit"
            
            className="flex bg-[#B58130] mt-2 py-3 px-6 cursor-pointer font-bold  text-white hover:bg-[#B58130]"
          >
            Add Item
            <FaUtensils className="mt-1 bg-[#B58130] mx-2 text-xl" />
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddItem;
