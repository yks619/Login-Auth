import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios"

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm();

  function formSubmit(value) {
    console.log(value);
    const data = {...value}
    delete data ["confirmPassword"]
    console.log(data)
    sendData(data)
  }


  async function sendData(data){
    const res = await axios.post("http://localhost:3000/user", data)
    console.log(res)
  }
  return (
    <div className="bg-gray-500 flex items-center justify-center w-full h-screen">
      <form
        className="bg-gradient-to-r from-cyan-500 to-blue-500 w-[50%] h-auto grid items-center justify-center rounded-lg p-6"
        onSubmit={handleSubmit((value) => {
          formSubmit(value);
        })}
      >
        <h2 className="text-3xl text-white font-bold text-center">Sign Up</h2>

        <div className="w-full">
          <label className="text-white font-semibold text-xl" htmlFor="name">
            Name
          </label>
          <input
            {...register("name", { required: "Name is required" })}
            className="w-full py-2 px-4 rounded-md"
            type="text"
            placeholder="Enter Your Name"
            id="name"
          />
          {errors.name && <p className="text-red-600">{errors.name.message}</p>}
        </div>

        <div>
          <label className="text-white font-semibold text-xl" htmlFor="address">
            Address
          </label>
          <input
            {...register("address", { required: "Address is required" })}
            className="w-full rounded-md py-2 px-4"
            type="text"
            placeholder="Enter Your Address"
            id="address"
          />
          {errors.address && (
            <p className="text-red-600">{errors.address.message}</p>
          )}
        </div>

        <div>
          <label className="text-white font-semibold text-xl" htmlFor="contact">
            Contact
          </label>
          <input
            {...register("contact", { required: "Contact is required" })}
            className="w-full rounded-md py-2 px-4"
            type="text"
            placeholder="Enter Your Contact Number"
            id="contact"
          />
          {errors.contact && (
            <p className="text-red-600">{errors.contact.message}</p>
          )}
        </div>

        <div>
          <label className="text-white font-semibold text-xl" htmlFor="email">
            Email
          </label>
          <input
            {...register("email", { required: "Email is required" })}
            className="w-full rounded-md py-2 px-4"
            type="email"
            placeholder="Enter Your Email"
            id="email"
          />
          {errors.email && (
            <p className="text-red-600">{errors.email.message}</p>
          )}
        </div>

        <div>
          <label
            className="text-white font-semibold text-xl"
            htmlFor="password"
          >
            Password
          </label>
          <input
            {...register("password", { required: "Password is required" })}
            className="w-full rounded-md py-2 px-4"
            type="password"
            placeholder="password"
            id="password"
          />
          {errors.password && (
            <p className="text-red-600">{errors.password.message}</p>
          )}
        </div>

        <div>
          <label
            className="text-white font-semibold text-xl"
            htmlFor="confirmPassword"
          >
            Confirm Password
          </label>
          <input
            className="w-full rounded-md py-2 px-4"
            type="password"
            placeholder="Confirm Password"
            id="confirmPassword"
            {...register("confirmPassword", {
              required: "Confirm Password is required",
              validate: (value) =>
                value === getValues("password") || "Passwords do not match",
            })}
          />
          {errors.confirmPassword && (
            <p className="text-red-600">{errors.confirmPassword.message}</p>
          )}
        </div>

        <button
          type="submit"
          className="mt-4 bg-gradient-to-r from-teal-400 to-blue-500 hover:from-pink-500 hover:to-orange-500 text-white py-4 px-2 text-2xl cursor-pointer"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default SignUp;
