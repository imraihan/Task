import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { register, reset } from "../features/auth/authSlice";
const Register = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    contact_number: "",
    address: "",
    user_details: "",
  });

  const { username, email, password, contact_number, address, user_details } =
    formData;

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user, isLoading, isError } = useSelector((state) => state.auth);

  useEffect(() => {
    if (user) {
      navigate("/");
    }
    dispatch(reset);
  }, [user, isError, isLoading, dispatch, navigate]);

  const onChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const userData = {
      username,
      email,
      password,
      contact_number,
      address,
      user_details,
    };
    console.log(userData);
    dispatch(register(userData));
    navigate('/login');
  };
  return (
    <>
    <div className="bg-gradient-to-r from-blue-500">  <br />
      <section className="flex flex-col items-center text-gray-700 text-xl font-mono">
        <h1 className="">Signup User</h1>
      </section>  <br />
      <div className="flex flex-col justify-center items-center">
        <form onSubmit= {onSubmit} className="w-full max-w-lg">
          <div className="flex flex-wrap -mx-3 ">
            <div className="w-full px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold "
                htmlFor="grid-first-name"
              >
                First Name
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="grid-first-name"
                type="text"
                name='username'
                value={username}
                onChange={onChange}
                placeholder="Raihan"
              />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3">
            <div className="w-full px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold "
                htmlFor="grid-email"
              >
                Email Address
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="grid-email"
                type="text"
                name='email'
                value={email}
                onChange={onChange}
                placeholder="Raihan@gmail.com"
              />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold "
                htmlFor="grid-password"
              >
                Password
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-password"
                type="password"
                name="password"
                value={password}
                onChange={onChange}      
                placeholder="******************"
              />
              <p className="text-red-600 text-xs italic">
                Make it as long and as crazy as you'd like
              </p>
            </div>
          </div>
          <div className="flex flex-wrap -mx-3">
            <div className="w-full px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold "
                htmlFor="grid-contact-number"
              >
                Contact Number
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="grid-contact-number"
                type="text"
                name='contact_number'
                value={contact_number}
                onChange={onChange} 
                placeholder="01672297103"
              />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3">
            <div className="w-full px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold "
                htmlFor="grid-address"
              >
                Enter Your Address
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="grid-address"
                type="text"
                name='address'
                value={address}
                onChange={onChange}
                placeholder="Mirpur 13"
              />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3">
            <div className="w-full px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold "
                htmlFor="grid-details"
              >
                Details Information
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="grid-details"
                type="text"
                name='user_details'
                value={user_details}
                onChange={onChange}
                placeholder="The Rainy Season"
              />
            </div>
          </div>
          <div className="md:flex md:items-center">
            <div className="md:w-1/2"></div>
            <div className="md:w-2/3">
              <button
                className="shadow bg-gradient-to-r from-blue-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 focus:shadow-outline focus:outline-none text-white font-sans-serif py-2 px-4 rounded"
                type="button" onClick={onSubmit}
              >
                Sign Up
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>  
    </>
  );
};

export default Register;
