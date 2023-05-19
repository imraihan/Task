import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import {useNavigate} from 'react-router-dom';
import { register, reset } from "../features/auth/authSlice";
const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const { name, email, password } = formData;

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const {user, isLoading, isError} = useSelector((state)=> state.auth)

  useEffect(() => {
   if(user) {
    navigate('/');
   }
   dispatch(reset);
  }, [user, isError, isLoading, dispatch, navigate])
  

  const onChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const onSubmit =(e)=> {
    e.preventDefault();
    const userData = {name, email, password}
    console.log(userData);
    dispatch(register(userData))
  }
  return (
    <>
      <section className="">
        <h1 className="text-xl col-start-auto">Register User</h1>
      </section>
      <form onSubmit= {onSubmit}>
        <label className=""> Full Name</label>
        <input
        type="text"
        name='name'
        value={name}
        onChange={onChange}      
        placeholder="Enter Your Name"
        />
        <input
        type="text"
        name='email'
        value={email}
        onChange={onChange}      
        placeholder="Enter Your Email Address"
        />
          <input
        type="text"
        name='password'
        value={password}
        onChange={onChange}      
        placeholder="Enter Password"
        />
        <button type="submit">Submit</button>

      </form>
    </>
  );
};

export default Register;
