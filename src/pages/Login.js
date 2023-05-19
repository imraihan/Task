import React from "react";
import { useState } from "react";

const Login = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const { email, password } = formData;

  const onChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const onSubmit =(e)=> {
    e.preventDefault();
  }
  return (
    <>
      <section className="heading">
        <h1 className="text-5xl">Login Here</h1>
      </section>
      <form onSubmit= {onSubmit}>
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

export default Login;
